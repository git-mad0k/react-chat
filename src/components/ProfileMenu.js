import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'


class ProfileMenu extends React.Component {

  state = {
    anchorEl: null,
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }


  render() {
    const { logOutHandler } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)
    return(
      <React.Fragment>
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
          <MenuItem onClick={logOutHandler}>Logout</MenuItem>
        </Menu>
      </React.Fragment>

    )
  }
}

export default ProfileMenu
