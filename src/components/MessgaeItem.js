import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import classnames from 'classnames'
import AvatarProfile from './AvatarProfile'

const styles = theme => ({
  message__author: {
    color: "rgb(96, 125, 139)",
    fontSize: "1em",
    fontWeight: "400"
  },
  message__text: {
    fontSize: "1em",
    fontWeight: "400"
  },
  message__date: {
    color: "rgb(96, 125, 139)",
    fontSize: "1em",
    fontWeight: "400"
  },
  message__container: {
    marginLeft: "1rem",
    padding: "0.5rem",
    fontSize: "0.875rem",
    minWidth: "70px",
    maxWidth: "450px"
  },

  message__containerForMe: {
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
      <Paper className={classnames(classes.message__container, isMessageForMe && classes.message__containerForMe)}>
        <div className={classes.message__author}>{message.name}</div>
        <div className={classes.message__text}>{message.content}</div>
        <div className={classes.message__date}>{message.date}</div>
      </Paper>
    </div>;
}

export default withStyles(styles)(MessageItem)
