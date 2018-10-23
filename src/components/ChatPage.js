import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Sidebar from './Sidebar'
import ChatHeader from './ChatHeader'
import Chat from './Chat'
import NewChatDialog from './NewChatDialog'

import { withRouter } from 'react-router-dom';


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
    const { match, fetchMyChats, fetchAllChats, setActiveChat, socketsConnect, mountChat  } = this.props

    Promise.all([
      fetchMyChats(),
      fetchAllChats(),
    ])
    .then(() => {
      socketsConnect()
    })
    .then(() => {
      const { chatId } = match.params
      if (chatId) {
        setActiveChat(chatId);
        mountChat(chatId)
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    const { match: { params }, setActiveChat, unmountChat, mountChat} = this.props;
    const { params: nextParams } = nextProps.match;
    // If we change route, then fetch messages from chat by chatID
    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId)
      unmountChat(params.chatId)
      mountChat(nextParams.chatId)
    }
  }

  render() {
    const { classes, chats, joinChat, leaveChat, messages, sendMessage, activeUser, deleteChat, editUser } = this.props   
    const { newChatDialog } = this.state
   

    return (
      <div className={classes.appFrame}>
        <ChatHeader logOutHandler={this.logOutHandler} leaveChat={leaveChat} deleteChat={deleteChat} activeChat={chats.active} activeUser={activeUser} editUser={editUser} />
        <Sidebar chats={chats} joinChat={joinChat} handleOpen={() => this.handleOpenNewChatDialog() } />
        <Chat messages={messages} joinChat={joinChat} sendMessage={sendMessage} activeUser={activeUser} activeChat={chats.active}/>
        <NewChatDialog open={newChatDialog} 
        handleClose={() => this.handleCloseNewChatDialog()}
        submit={this.handleCreateChat} 
        />
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(ChatPage))
