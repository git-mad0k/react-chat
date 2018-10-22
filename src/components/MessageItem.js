import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import classnames from 'classnames'
import AvatarProfile from './AvatarProfile'
import moment from 'moment'

const styles = theme => ({
  messageAuthor: {
    color: "rgb(96, 125, 139)",
    fontSize: "1em",
    fontWeight: "400"
  },
  messageText: {
    fontSize: "1em",
    fontWeight: "400"
  },
  messageDate: {
    color: "rgb(96, 125, 139)",
    fontSize: "1em",
    fontWeight: "400"
  },
  messageContainer: {
    marginLeft: "1rem",
    padding: "0.5rem",
    fontSize: "0.875rem",
    minWidth: "70px",
    maxWidth: "450px"
  },

  messageContainerForMe: {
    marginRight: "1rem",
    backgroundColor: "#4dc5ff3d"
  },
  messageWrapper: {
    display: "flex",
    margin: "1rem 0.8rem",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    alignItems: "center"
  },

  messageWrapperForMe: {
    alignSelf: "flex-end",
    flexDirection: "row-reverse"
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
  },
});

const MessageItem = ({ classes, message, key, activeUser }) => {
  const isMessageForMe = message.sender._id === activeUser._id
  const colorForMe = message.sender._id === activeUser._id === "me" ? "red" : "";
  
  if (message.statusMessage) {
    return (
       <div className={classes.userStatusWrapper}>
          <div className={classes.userName}>
          {message.sender.username} <span className={classes.userStatus}>{message.content}</span>
          </div>
        <div className={classes.userDateVisit}> {moment(message.createdAt).fromNow()} </div>
        </div>
    )
  }
  return <div key={key} className={classnames(classes.messageWrapper, isMessageForMe && classes.messageWrapperForMe)}>
    <AvatarProfile name={message.sender.username} color={colorForMe} />
      <Paper className={classnames(classes.messageContainer, isMessageForMe && classes.messageContainerForMe)}>
        <div className={classes.messageAuthor}>{message.sender.username}</div>
        <div className={classes.messageText}>{message.content}</div>
      <div className={classes.messageDate}>{moment(message.date).fromNow()}</div>
      </Paper>
    </div>;
}

export default withStyles(styles)(MessageItem)
