import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { chats, messages } from "../mock-data.json"
import Sidebar from './Sidebar'
import ChatHeader from './ChatHeader'
import Chat from './Chat'

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

  logOutHandler = e => {
    e.persist()
    this.props.logout()    
  }
  render() {
    const { classes } = this.props    
    return (
      <div className={classes.appFrame}>
        <ChatHeader onClick={this.logOutHandler} />
        <Sidebar chats={chats} />
        <Chat messages={messages} />
      </div>
    )
  }
}

export default withStyles(styles)(ChatPage)
