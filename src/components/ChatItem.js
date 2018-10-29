import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import AvatarProfile from './AvatarProfile'
import { Link } from 'react-router-dom';

const ChatItem = ({ title, color, createdAt, joinChat, chatId, active, disabled }) => (
  <ListItem 
    button 
    onClick={joinChat} 
    component={Link} 
    to={`/chat/${chatId}`} 
    selected={active} 
    disabled={disabled} 
    >
    <AvatarProfile name={title} color={color} />
    <ListItemText primary={title} secondary={createdAt} />
  </ListItem>
)

export default ChatItem
