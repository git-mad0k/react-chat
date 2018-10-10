import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

import titleInitilals from '../utils/title-initials'

const styles = theme => ({
  
})

const AvatarProfile = ({ name, classes }) => (
  <Avatar>
    {titleInitilals(name)}
  </Avatar>
)

export default withStyles(styles)(AvatarProfile)
