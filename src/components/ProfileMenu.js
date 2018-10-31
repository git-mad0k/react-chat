import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import EditProfile from './EditProfile';

class ProfileMenu extends React.Component {
  static propTypes = {
    activeUser: PropTypes.shape({
      username: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }).isRequired,
    editUser: PropTypes.func.isRequired,
    logOutHandler: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
  };
  state = {
    anchorEl: null,
    openDialog: false,
    username: '',
    firstName: '',
    lastName: '',
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      username: nextProps.activeUser.username,
      firstName: nextProps.activeUser.firstName,
      lastName: nextProps.activeUser.lastName,
    });
  }

  hanldeEditUser = (data) => {
    const { username, firstName, lastName } = data;
    this.setState({
      username,
      firstName,
      lastName,
    });
    this.props.editUser(data);
    this.handleCloseDialog();
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleOpenDialog = () => {
    this.setState({
      openDialog: true,
    });
    this.handleClose();
  };

  handleCloseDialog = () => {
    this.setState({
      openDialog: false,
    });
  };

  render() {
    const { logOutHandler, disabled } = this.props;
    const {
      anchorEl, openDialog, username, firstName, lastName,
    } = this.state;
    const open = Boolean(anchorEl);

    return (
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
        <EditProfile
          user={{ username, firstName, lastName }}
          handleClose={this.handleCloseDialog}
          open={openDialog}
          hanldeEditUser={data => this.hanldeEditUser(data)}
        />
      </React.Fragment>
    );
  }
}

export default ProfileMenu;
