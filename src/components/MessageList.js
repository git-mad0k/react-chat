import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom';
import MessageItem from './MessageItem'

import  Typography from '@material-ui/core/Typography';
import  Paper from '@material-ui/core/Paper';

const styles = theme => ({
  messagesWrapper: {
    paddingTop: "56px",
    overflowX: "auto",
    paddingBottom: "130px",
    width: "100%",
    height: "100%"
  },
 
  paper: {
    padding: theme.spacing.unit * 3
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
    const { classes, messages, match, activeUser  } = this.props    
    if (!match.params.chatId) {
      return (
        <Paper className={classes.paper}>
          <Typography variant="display1" gutterBottom>
            Start messaging…
          </Typography>
          <Typography variant="body1" gutterBottom>
            Use <strong>Global</strong> to explore communities around here.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Use <strong>Recents</strong> to see your recent conversations.
          </Typography>
        </Paper>
      );
    }

    return messages && messages.length? (
      <div className={classes.messagesWrapper} ref="messagesWrapper">
        {messages && messages.map((message, i) =>
          <MessageItem message={message} key={i} />
        )}        
      </div>
    ) : (
      <Typography variant="display1">
          There is no messages yet...
      </Typography>
    )
  }
}
export default withRouter(withStyles(styles)(MessageList))
