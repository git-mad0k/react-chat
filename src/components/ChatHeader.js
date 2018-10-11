import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AvatarProfile from "./AvatarProfile" 
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const styles = theme => ({
  appBar: {
    width: `calc(100% - 320px)`
  },
  "appBar-left": {
    marginLeft: 320
  },
  "appBar-right": {
    marginRight: 320
  },
  chatName: {
    paddingLeft: "1rem",
    color: "inherit",
    flexGrow: 1
  },
});

class ChatHeader extends React.Component {
  state ={
    anchorEl: null,
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render(){
    const { classes, onClick } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)
  return (
  <AppBar position="absolute" className={classes.appBar}>
    <Toolbar>
      <AvatarProfile name={"React Chat"} color={"red"} />
      <Typography variant="title" className={classes.chatName} noWrap>
        React Chat
      </Typography>
      <div>
        <IconButton          
          aria-haspopup="true"          
          color="inherit"
          // onClick={onClick}
            onClick={this.handleMenu}
        >
          <AccountCircle />
        </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={this.handleClose}
          >
            <MenuItem disabled>Profile</MenuItem>
            <MenuItem onClick={onClick}>Logout</MenuItem>   
            </Menu>     
      </div>
    </Toolbar>
  </AppBar>
);
  }
}
export default withStyles(styles)(ChatHeader);
