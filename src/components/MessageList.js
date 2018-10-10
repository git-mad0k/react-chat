import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MessageItem from './MessgaeItem'


const styles = theme => ({
  messagesWrapper: {
    paddingTop: '56px',
    overflowX: 'auto',
    paddingBottom: '100px',
    width: '100%',
    height: '100%',
  },

  userStatus: {
    alignSelf: 'center',
    display: 'flex',
    margin: '1rem 0.8rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: '0.875rem',
    fontWeight: '400',
    textAlign: 'center',
    flexDirection: 'column'
  },
  user__name: {
    fontSize: '1em',
    color: "green",
  },
  user__status: {
    fontSize: '1em',
    color: '#000'
  },
  user__date_visit: {
    fontSize: '0.875em',
    color: 'rgb(96, 125, 139)',
  },
})

class MessageList extends React.Component  {
componentDidMount() {
  this.scrollDownHistory()
}

componentDidUpdate() {
  this.scrollDownHistory()
}

scrollDownHistory() {
  const messagesWrapper = this.refs.messagesWrapper
  console.log(messagesWrapper)
  if (messagesWrapper) {
    messagesWrapper.scrollTop = messagesWrapper.scrollHeight
  }
}
  render(){
    const { classes, messages } = this.props
  return (
  <div className={classes.messagesWrapper} ref="messagesWrapper">
          {messages && messages.map((message, i) => 
            <MessageItem message={message} key={i} />
          )}
          <div className={classes.userStatus}>
            <div className={classes.user__name}>
              testuser <span className={classes.user__status}>joined</span>
            </div>
            <div className={classes.user__date_visit}>
              2 days ago
              </div>
          </div>
        </div>
)}
}
export default withStyles(styles)(MessageList)
