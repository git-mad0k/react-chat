import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import MessageList from './MessageList';
import NewMessage from './NewMessage';

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    overflowX: 'hidden',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Chat = ({
  classes,
  messages,
  sendMessage,
  joinChat,
  activeUser,
  activeChat,
  isConnected,
}) => (
  <main className={classes.content}>
    <MessageList messages={messages} activeUser={activeUser} />

    {activeChat && (
      <NewMessage
        onSendMessage={sendMessage}
        // eslint-disable-next-line
        onJoinChat={chatId => joinChat(activeChat._id)}
        activeUser={activeUser}
        showJoinBtn={!activeUser.isChatMember}
        disabled={!isConnected}
      />
    )}
  </main>
);

export default withRouter(withStyles(styles)(Chat));

Chat.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  sendMessage: PropTypes.func.isRequired,
  joinChat: PropTypes.func.isRequired,
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
  activeChat: PropTypes.shape({
    createdAt: PropTypes.string,
    creator: PropTypes.shape({
      _id: PropTypes.string,
      username: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
    members: PropTypes.array,
    title: PropTypes.string,
  }),
  isConnected: PropTypes.bool.isRequired,
};

Chat.defaultProps = {
  activeChat: null,
};
