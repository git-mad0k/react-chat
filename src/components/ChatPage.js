import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { messages } from "../mock-data.json"
import Sidebar from './Sidebar'
import ChatHeader from './ChatHeader'
import Chat from './Chat'
import NewChatDialog from './NewChatDialog'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
});

class ChatPage extends React.Component {

  state = {
    newChatDialog: false
  }

  logOutHandler = e => {
    e.persist()
    this.props.logout()    
  }

  handleOpenNewChatDialog = () => {
    this.setState({ newChatDialog: true });
  }

  handleCloseNewChatDialog = () => {
    this.setState({ newChatDialog: false });
  }

  handleCreateChat = chat => {
    this.props.createChat(chat)
  }
  componentDidMount() {
    const { match,fetchMyChats, fetchAllChats, setActiveChat } = this.props

    Promise.all([
      fetchMyChats(),
      fetchAllChats(),
    ])
    .then(() => {
      if (match.params.chatId) {
        setActiveChat(match.params.chatId);
      }
      console.log(match)
    })
  }
  render() {
    const { classes, chats, joinChat, leaveChat } = this.props   
    const { newChatDialog } = this.state
    return (
      <div className={classes.appFrame}>
        <ChatHeader logOutHandler={this.logOutHandler} leaveChat={leaveChat} />
        <Sidebar chats={chats} joinChat={joinChat} handleOpen={() => this.handleOpenNewChatDialog() } />
        <Chat messages={messages} />
        <NewChatDialog open={newChatDialog} 
        handleClose={() => this.handleCloseNewChatDialog()}
        submit={this.handleCreateChat} 
        />
      </div>
    )
  }
}

export default withStyles(styles)(ChatPage)
