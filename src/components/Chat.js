import React from 'react'
import MessageList from './MessageList'
import { withStyles } from '@material-ui/core/styles'
import NewMessage from './NewMessage'

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    overflowX: 'hidden',
    height: '100%'
  },
})

const Chat = ({ classes, messages }) => (
  <main className={classes.content}>
    <MessageList messages={messages} />
    <NewMessage />
  </main>
)


export default withStyles(styles)(Chat)
