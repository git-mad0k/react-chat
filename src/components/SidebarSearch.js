import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  toolbar: {
    display: 'flex',
    ...theme.mixins.toolbar,
  },
  input: {
    width: '100%',
    padding: '0 10px',
  },
});

const SidebarSearch = ({ classes, handleSearchChange }) => (
  <div className={classes.toolbar}>
    <TextField
      placeholder="Search charts..."
      className={classes.input}
      margin="normal"
      onChange={handleSearchChange}
    />
  </div>
);

export default withStyles(styles)(SidebarSearch);

SidebarSearch.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};
