import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Sidebar from './Sidebar';
import ChatHeader from './ChatHeader';
import Chat from './Chat';
import NewChatDialog from './NewChatDialog';
import ErrorMessage from './ErrorMessage';

const styles = () => ({
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
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object.isRequired,
    }).isRequired,
    fetchMyChats: PropTypes.func.isRequired,
    fetchAllChats: PropTypes.func.isRequired,
    setActiveChat: PropTypes.func.isRequired,
    socketsConnect: PropTypes.func.isRequired,
    mountChat: PropTypes.func.isRequired,
    joinChat: PropTypes.func.isRequired,
    leaveChat: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    deleteChat: PropTypes.func.isRequired,
    editUser: PropTypes.func.isRequired,
    errorCloseMessage: PropTypes.func.isRequired,
    classes: PropTypes.PropTypes.objectOf(PropTypes.string).isRequired,
    chats: PropTypes.shape({
      active: PropTypes.object,
      my: PropTypes.array.isRequired,
      all: PropTypes.array.isRequired,
    }).isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape({
      chatId: PropTypes.string.isRequired,
      content: PropTypes.string,
      sender: PropTypes.object.isRequired,
      createdAt: PropTypes.string.isRequired,
    })).isRequired,
    activeUser: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      username: PropTypes.string,
      isMember: PropTypes.bool.isRequired,
      isCreator: PropTypes.bool.isRequired,
      isChatMember: PropTypes.bool.isRequired,
    }).isRequired,
    unmountChat: PropTypes.func.isRequired,
    createChat: PropTypes.func.isRequired,
    error: PropTypes.instanceOf(Error),
    isConnected: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    error: null,
  };

  static getDerivedStateFromProps(props, state) {
    const { params: nextParams } = props.match;

    if (nextParams.chatId && state.params !== nextParams.chatId) {
      return {
        params: nextParams.chatId,
      };
    }
    return null;
  }

  state = {
    newChatDialog: false,
    params: '',
  };

  componentDidMount() {
    const {
      match,
      fetchMyChats,
      fetchAllChats,
      setActiveChat,
      socketsConnect,
      mountChat,
    } = this.props;

    Promise.all([fetchMyChats(), fetchAllChats()])
      .then(() => {
        socketsConnect();
      })
      .then(() => {
        const { chatId } = match.params;
        if (chatId) {
          setActiveChat(chatId);
          mountChat(chatId);
          this.setState({
            params: chatId,
          });
        }
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { setActiveChat, unmountChat, mountChat } = this.props;
    const { params } = this.state;
    if (prevState.params !== params) {
      setActiveChat(params);
      unmountChat(prevState.params);
      mountChat(params);
    }
  }

  handleOpenNewChatDialog = () => {
    this.setState({ newChatDialog: true });
  };

  handleCloseNewChatDialog = () => {
    this.setState({ newChatDialog: false });
  };

  handleCreateChat = (value) => {
    const { chat } = value;
    const { createChat } = this.props;
    createChat(chat);
    this.setState({
      newChatDialog: false,
    });
  };

  render() {
    const {
      classes,
      chats,
      joinChat,
      leaveChat,
      messages,
      logout,
      sendMessage,
      activeUser,
      deleteChat,
      editUser,
      error,
      errorCloseMessage,
      isConnected,
    } = this.props;
    const { newChatDialog } = this.state;

    return (
      <div className={classes.appFrame}>
        <ChatHeader
          logOutHandler={logout}
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
          handleOpen={() => this.handleOpenNewChatDialog()}
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
          submit={value => this.handleCreateChat(value)}
        />
        <ErrorMessage error={error} closeSneckBar={errorCloseMessage} />
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(ChatPage));
