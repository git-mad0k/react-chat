import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MessageItem from './MessageItem'

const styles = theme => ({
  messagesWrapper: {
    paddingTop: "56px",
    overflowX: "auto",
    paddingBottom: "130px",
    width: "100%",
    height: "100%"
  },
  userStatusWrapper: {
    alignSelf: "center",
    display: "flex",
    margin: "1rem 0.8rem",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "0.875rem",
    fontWeight: "400",
    textAlign: "center",
    flexDirection: "column"
  },
  userName: {
    fontSize: "1em",
    color: "green"
  },
  userStatus: {
    fontSize: "1em",
    color: "#000"
  },
  userDateVisit: {
    fontSize: "0.875em",
    color: "rgb(96, 125, 139)"
  }
});

class MessageList extends React.Component {
  componentDidMount() {
    this.scrollDownHistory()
  }

  componentDidUpdate() {
    this.scrollDownHistory()
  }

  scrollDownHistory() {
    const messagesWrapper = this.refs.messagesWrapper    
    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight
    }
  }
  render() {
    const { classes, messages } = this.props
    return (
      <div className={classes.messagesWrapper} ref="messagesWrapper">
        {messages && messages.map((message, i) =>
          <MessageItem message={message} key={i} />
        )}
        <div className={classes.userStatusWrapper}>
          <div className={classes.userName}>
            testuser <span className={classes.userStatus}>joined</span>
          </div>
          <div className={classes.userDateVisit}> 2 days ago </div>
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(MessageList)
