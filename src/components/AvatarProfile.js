import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import titleInitilals from '../utils/title-initials'
import getColor from '../utils/color-from'

const styles = theme => ({
  
});

const AvatarProfile = ({ name, color, classes }) => (
  <Avatar style={{ backgroundColor: color ? color: getColor(name)}}>
    {titleInitilals(name)}
  </Avatar>)

export default withStyles(styles)(AvatarProfile)
