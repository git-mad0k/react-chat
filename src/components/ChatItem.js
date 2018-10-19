import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import AvatarProfile from './AvatarProfile'
import { Link } from 'react-router-dom';

const ChatItem = ({ title, color, createdAt, joinChat,chatId }) => {
  return(
    <ListItem button onClick={joinChat} component={Link} to={`/chat/${chatId}`}>
    <AvatarProfile name={title} color={color} />
    <ListItemText primary={title} secondary={createdAt} />
  </ListItem>
)}

export default ChatItem
