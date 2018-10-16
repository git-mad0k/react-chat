import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import AvatarProfile from './AvatarProfile'

const ChatItem = ({ name, color, date }) => (
  <ListItem button>
    <AvatarProfile name={name} color={color} />
    <ListItemText primary={name} secondary={date} />
  </ListItem>
)

export default ChatItem
