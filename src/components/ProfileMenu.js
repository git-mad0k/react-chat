import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import EditProfile from './EditProfile';

class ProfileMenu extends React.Component {

  state = {
    anchorEl: null,
    openDialog: false,
    user: {
      username: '',
      firstName: '',
      lastName: '',
      user: {
        username:'',
        firstName: '',
        lastName: ''
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const { user } = this.state    
    this.setState(
      { user: Object.assign(user, nextProps.activeUser)}
    )
  }

  hanldeEditUser = data => {    
    this.props.editUser(data)
    const { user } = this.state
    this.setState({ user: Object.assign(user, data),
        openDialog: false
      })
    
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }


  handleOpenDialog = () => {
    this.setState ({
      openDialog:true 
    })
    this.handleClose()
  }
  handleCloseDialog = () => {
    this.setState ({
      openDialog:false 
    })
  }

  render() {
    const { logOutHandler, disabled } = this.props
    const { anchorEl, openDialog, user } = this.state
    const open = Boolean(anchorEl)

    return(
      <React.Fragment>
        <IconButton
          aria-haspopup="true"
          color="inherit"          
          onClick={this.handleMenu}
          disabled={disabled}
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
          <MenuItem onClick={this.handleOpenDialog}>Profile</MenuItem>
          <MenuItem onClick={logOutHandler}>Logout</MenuItem>
        </Menu>
        <EditProfile user={user} handleClose={this.handleCloseDialog} open={openDialog} hanldeEditUser={data=> this.hanldeEditUser(data)} />
      </React.Fragment>

    )
  }
}

export default ProfileMenu
