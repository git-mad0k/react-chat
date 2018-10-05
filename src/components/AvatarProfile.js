import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import titleInitilals from '../utils/title-initials'
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";
import purple from "@material-ui/core/colors/purple";
import orange from "@material-ui/core/colors/orange";

const styles = theme => ({
  avatar_red: {
    backgroundColor: red[400],
    color: "#fff"
  },
  avatar_green: {
    backgroundColor: green[400],
    color: "#fff"
  },
  avatar_blue: {
    backgroundColor: blue[400],
    color: "#fff"
  },
  avatar_purple: {
    backgroundColor: purple[400],
    color: "#fff"  
  },
  avatar_orange: {
    backgroundColor: orange[400],
    color: "#fff"
  }
});

const colorList = ['red', 'green', 'blue', 'purple', 'orange']

const AvatarProfile = ({ name, color, classes }) => (
  <Avatar
    className={color && colorList.includes(color) ? classes[`avatar_${color}`] : ''}
  >
    {titleInitilals(name)}
  </Avatar>)

export default withStyles(styles)(AvatarProfile)
