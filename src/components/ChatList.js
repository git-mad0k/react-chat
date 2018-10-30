import React from 'react';

import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import ChatItem from './ChatItem';

const styles = () => ({
  chatList: {
    height: 'calc(100% - 56px)',
    overflowY: 'auto',
    flex: '1 1 auto',
  },
  noChats: {
    textAlign: 'center',
  },
});

const ChatList = ({
  classes, chats, activeChat, disabled,
}) => (
  <List className={classes.chatList}>
    {chats && chats.length ? (
      chats.map(chat => (
        <ChatItem
          {...chat}
          /* eslint-disable no-underscore-dangle */
          key={chat._id}
          chatId={chat._id}
          active={activeChat && activeChat._id === chat._id}
          /* eslint-enable no-underscore-dangle */
          disabled={disabled}
        />
      ))) : (
        <Typography variant="subheading" className={classes.noChats}>
            There is no chats yet...
        </Typography>
    )}
  </List>
);

export default withRouter(withStyles(styles)(ChatList));
