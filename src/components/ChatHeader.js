import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AvatarProfile from './AvatarProfile';
import ChatMenu from './ChatMenu';
import ProfileMenu from './ProfileMenu';

const styles = () => ({
  appBar: {
    width: 'calc(100% - 320px)',
  },
  'appBar-left': {
    marginLeft: 320,
  },
  'appBar-right': {
    marginRight: 320,
  },
  chatName: {
    paddingLeft: '1rem',
    color: 'inherit',
    flexGrow: 1,
  },
});

const ChatHeader = ({
  classes,
  logOutHandler,
  leaveChat,
  activeChat,
  deleteChat,
  editUser,
  activeUser,
  isConnected,
}) => (
  <AppBar position="absolute" className={classes.appBar}>
    <Toolbar>
      {activeChat ? (
        <React.Fragment>
          <AvatarProfile name={activeChat.title} />
          <Typography variant="title" className={classes.chatName} noWrap>
            {activeChat.title}
            {activeUser.isChatMember && (
              <ChatMenu
                /* eslint-disable no-underscore-dangle */
                leaveChat={() => leaveChat(activeChat._id)}
                deleteChat={() => deleteChat(activeChat._id)}
                /* eslint-enable no-underscore-dangle */
                activeUser={activeUser}
                disabled={!isConnected}
              />
            )}
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <AvatarProfile name="React Chat" color="red" />
          <Typography variant="title" className={classes.chatName} noWrap>
            React Chat
          </Typography>
        </React.Fragment>
      )}
      <ProfileMenu
        logOutHandler={logOutHandler}
        editUser={editUser}
        activeUser={activeUser}
        disabled={!isConnected}
      />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(ChatHeader);

ChatHeader.propTypes = {
  classes: PropTypes.objectOf(PropTypes.shape).isRequired,
  logOutHandler: PropTypes.func.isRequired,
  leaveChat: PropTypes.func.isRequired,
  activeChat: PropTypes.shape({
    createdAt: PropTypes.string,
    creator: PropTypes.shape({
      _id: PropTypes.string,
      username: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
    members: PropTypes.array,
    title: PropTypes.string,
  }),
  deleteChat: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
  activeUser: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
    isMember: PropTypes.bool.isRequired,
    isCreator: PropTypes.bool.isRequired,
    isChatMember: PropTypes.bool.isRequired,
  }).isRequired,
  isConnected: PropTypes.bool.isRequired,
};

ChatHeader.defaultProps = {
  activeChat: null,
};
