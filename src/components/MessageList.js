import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import MessageItem from './MessageItem';

const styles = theme => ({
  messagesWrapper: {
    paddingTop: '56px',
    overflowX: 'auto',
    paddingBottom: '130px',
    width: '100%',
    height: '100%',
  },

  paper: {
    padding: theme.spacing.unit * 3,
  },
});

class MessageList extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape({
      chatId: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      content: PropTypes.string,
      sender: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
      }),
      statusMessage: PropTypes.bool,
      updatedAt: PropTypes.string,
      _id: PropTypes.string.isRequired,
    })),
    match: PropTypes.shape({
      params: PropTypes.object.isRequired,
    }).isRequired,
    activeUser: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      username: PropTypes.string,
      isMember: PropTypes.bool.isRequired,
      isCreator: PropTypes.bool.isRequired,
      isChatMember: PropTypes.bool.isRequired,
    }).isRequired,
  };
  static defaultProps = {
    messages: [],
  };
  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    if (this.messagesWrapper) {
      this.messagesWrapper.scrollTop = this.messagesWrapper.scrollHeight;
    }
  }

  render() {
    const {
      classes, messages, match, activeUser,
    } = this.props;
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

    return messages && messages.length ? (
      <div
        className={classes.messagesWrapper}
        ref={(wrapper) => {
          this.messagesWrapper = wrapper;
        }}
      >
        {messages &&
          messages.map(message => (
            <MessageItem
              message={message}
              // eslint-disable-next-line
              key={message._id}
              activeUser={activeUser}
            />
          ))}
      </div>
    ) : (
      <Typography variant="display1">There is no messages yet...</Typography>
    );
  }
}
export default withRouter(withStyles(styles)(MessageList));
