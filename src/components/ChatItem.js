import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import AvatarProfile from './AvatarProfile';

const ChatItem = ({
  title, color, createdAt, chatId, active, disabled,
}) => (
  <ListItem button component={Link} to={`/chat/${chatId}`} selected={active} disabled={disabled}>
    <AvatarProfile name={title} color={color} />
    <ListItemText primary={title} secondary={createdAt} />
  </ListItem>
);

export default ChatItem;

ChatItem.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  chatId: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

ChatItem.defaultProps = {
  color: '',
};
