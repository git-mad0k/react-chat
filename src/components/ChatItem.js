import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import AvatarProfile from './AvatarProfile'
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({

})

const ChatItem = ({ classes, name, color, date, key }) => (
  <ListItem key={key} button>
    <AvatarProfile name={name} color={color} />
    <ListItemText primary={name} secondary={date} />
  </ListItem>
)

export default withStyles(styles)(ChatItem)
