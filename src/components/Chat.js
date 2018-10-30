import React from 'react';
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
  classes, messages, sendMessage, joinChat, activeUser, activeChat, isConnected,
}) => (
  <main className={classes.content}>
    <MessageList messages={messages} activeUser={activeUser} />

    {activeChat
      && (
      <NewMessage
        onSendMessage={sendMessage}
        // eslint-disable-next-line
        onJoinChat={chatId => joinChat(activeChat._id)}
        activeUser={activeUser}
        showJoinBtn={!activeUser.isChatMember}
        disabled={!isConnected}
      />
      )
    }
  </main>
);


export default withRouter(withStyles(styles)(Chat));
