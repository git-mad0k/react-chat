import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Form, Field } from 'react-final-form';
import TextField from './Forms/TextField';

const EditProfile = ({
  open, handleClose, hanldeEditUser, user,
}) => {
  const { username, lastName, firstName } = user;
  const defaultData = {
    username,
    firstName,
    lastName,
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <Form
          onSubmit={hanldeEditUser}
          initialValues={defaultData}
          render={({
            handleSubmit, submitting, pristine,
          }) => (
            <form onSubmit={handleSubmit}>
              <DialogTitle id="form-dialog-title">Edit Profile</DialogTitle>
              <DialogContent style={{ width: '400px' }}>
                <Field
                  name="username"
                  component={TextField}
                  label="Login"
                  placeholder="Login"
                  autoComplete="username"
                  fullWidth
                />
                <Field
                  name="firstName"
                  component={TextField}
                  label="First Name"
                  placeholder="New chat name"
                  autoComplete="firstname"
                  fullWidth
                />
                <Field
                  name="lastName"
                  component={TextField}
                  label="Last Name"
                  placeholder="Last Name"
                  autoComplete="lastname"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button type="submit" color="primary" disabled={submitting || pristine}>
                  Create
                </Button>
              </DialogActions>
            </form>
          )}
        />
      </Dialog>
    </React.Fragment>
  );
};


export default EditProfile;
