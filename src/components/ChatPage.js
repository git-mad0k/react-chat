import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Sidebar from './Sidebar'
import ChatHeader from './ChatHeader'
import Chat from './Chat'
import NewChatDialog from './NewChatDialog'
import ErrorMessage from './ErrorMessage'

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
    newChatDialog: false,
    params: '',
  }

  logOutHandler = () => {    
    this.props.logout()    
  }

  handleOpenNewChatDialog = () => {
    this.setState({ newChatDialog: true });
  }

  handleCloseNewChatDialog = () => {
    this.setState({ newChatDialog: false });
  }

  handleCreateChat = value => {
    const { chat } = value   
    this.props.createChat(chat)
    this.setState({
      newChatDialog: false
    })
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
        this.setState({
          params: chatId
        })
      }
      
    })

    
  }

  static getDerivedStateFromProps(props, state) {
    const { params: nextParams } = props.match

    if (nextParams.chatId && state.params !== nextParams.chatId) {
      return {
        params: nextParams.chatId
      }
    }
    return null
  }

  componentDidUpdate (prevProps, prevState) {
    const { setActiveChat, unmountChat, mountChat } = this.props
    if (prevState.params !== this.state.params) {
      setActiveChat(this.state.params)
      unmountChat(prevState.params)
      mountChat(this.state.params)
    }
  }
  render() {
    const { classes, chats, joinChat, leaveChat, messages, 
      sendMessage, activeUser, deleteChat, editUser, error, errorCloseMessage, isConnected } = this.props   
    const { newChatDialog } = this.state

    return (
      <div className={classes.appFrame}>
        <ChatHeader 
          logOutHandler={this.logOutHandler} 
          leaveChat={leaveChat} 
          deleteChat={deleteChat} 
          activeChat={chats.active} 
          activeUser={activeUser} 
          editUser={editUser}
          isConnected={isConnected}
          />
        <Sidebar 
          chats={chats} 
          joinChat={joinChat}
          handleOpen={() => this.handleOpenNewChatDialog() }
          isConnected={isConnected}
          activeChat={chats.active}      
          />
        <Chat 
          messages={messages} 
          joinChat={joinChat} 
          sendMessage={sendMessage} 
          activeUser={activeUser} 
          activeChat={chats.active}
          isConnected={isConnected}
          />
        <NewChatDialog 
          open={newChatDialog} 
          handleClose={() => this.handleCloseNewChatDialog()}
          submit={(value) => this.handleCreateChat(value)} 
        />
        <ErrorMessage error={error} closeSneckBar={errorCloseMessage}/>
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(ChatPage))
