import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import classnames from 'classnames'
import AvatarProfile from './AvatarProfile'

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
  }
});

const MessageItem = ({ classes, message, key }) => {
  const isMessageForMe = message.sender === "me"
  const colorForMe = message.sender === "me" ? "red" : "";
  return <div key={key} className={classnames(classes.messageWrapper, isMessageForMe && classes.messageWrapperForMe)}>
    <AvatarProfile name={message.name} color={colorForMe} />
      <Paper className={classnames(classes.messageContainer, isMessageForMe && classes.messageContainerForMe)}>
        <div className={classes.messageAuthor}>{message.name}</div>
        <div className={classes.messageText}>{message.content}</div>
        <div className={classes.messageDate}>{message.date}</div>
      </Paper>
    </div>;
}

export default withStyles(styles)(MessageItem)
