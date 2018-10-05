import React from 'react'

import List from '@material-ui/core/List'
import { withStyles } from '@material-ui/core/styles'
import ChatItem from './ChatItem'

const styles = theme => ({
  chatList: {
    height: `calc(100% - 56px)`,
    overflowY: 'scroll',
    flex: '1 1 auto'
  },
})

const ChatList = ({ classes, chats }) => (
  <List className={classes.chatList}>
    {chats.map((chat, i) => (
      <ChatItem chat={chat} key={i} />
    ))}
  </List>
)

export default withStyles(styles)(ChatList)
