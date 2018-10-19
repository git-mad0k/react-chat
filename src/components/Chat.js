import React from 'react'
import MessageList from './MessageList'
import { withStyles } from '@material-ui/core/styles'
import NewMessage from './NewMessage'
import { withRouter } from 'react-router-dom';

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    overflowX: 'hidden',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
})

const Chat = ({ classes, messages, sendMessage, joinChat }) => (
  <main className={classes.content}>
   <MessageList messages={messages} />
   <NewMessage onSendMessage={sendMessage} onJoinChat={joinChat} />
  </main>
)


export default withRouter(withStyles(styles)(Chat))
