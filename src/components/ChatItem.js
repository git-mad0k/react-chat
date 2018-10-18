import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import AvatarProfile from './AvatarProfile'

const ChatItem = ({ title, color, createdAt, joinChat }) => {
  return(
  <ListItem button onClick={joinChat}>
    <AvatarProfile name={title} color={color} />
    <ListItemText primary={title} secondary={createdAt} />
  </ListItem>
)}

export default ChatItem
