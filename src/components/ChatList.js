import React from 'react'

import List from '@material-ui/core/List'
import { withStyles } from '@material-ui/core/styles'
import ChatItem from './ChatItem'

const styles = theme => ({
  chatList: {
    height: `calc(100% - 56px)`,
    overflowY: 'auto',
    flex: '1 1 auto'
  },
})

const ChatList = ({ classes, chats, joinChat }) => (
  <List className={classes.chatList}>
    {chats.map((chat, i) => (
      <ChatItem {...chat} key={i} joinChat={() => joinChat(chat._id)} />
    ))}
  </List>
)

export default withStyles(styles)(ChatList)
