import React from 'react'

import List from '@material-ui/core/List'
import { withStyles } from '@material-ui/core/styles'
import ChatItem from './ChatItem'
import Typography from '@material-ui/core/Typography'
import { withRouter } from 'react-router-dom';

const styles = theme => ({
  chatList: {
    height: `calc(100% - 56px)`,
    overflowY: 'auto',
    flex: '1 1 auto'
  },
  noChats: {
    textAlign: 'center',
  }
})

const ChatList = ({ classes, chats }) => {
  return (   
    <List className={classes.chatList}>
      {chats && chats.length  ? (
        chats.map((chat, i) => (
          <ChatItem {...chat} key={chat._id} chatId={chat._id} />
        ))) : (
          <Typography variant="subheading" className={classes.noChats}>
            There is no chats yet...
      </Typography>
        )}
    </List>
)}

export default withRouter(withStyles(styles)(ChatList))
