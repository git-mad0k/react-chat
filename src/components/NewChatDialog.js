import React from 'react'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Form, Field } from 'react-final-form'
import TextField from './Forms/TextField'

const FormDialog = ({ open, handleClose, submit }) => {
 const submitForm = values => {
    const { chat } = values
    submit({ title: chat })
    handleClose()
  }
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <Form
          onSubmit={submitForm}
          render={({ handleSubmit, reset, submitting, pristine, }) => (
            <form onSubmit={handleSubmit}>
              <DialogTitle id="form-dialog-title">New Chat</DialogTitle>
              <DialogContent style={{ width: '400px' }}>
                <DialogContentText>
                  Enter name for new chat
                </DialogContentText>
                <Field
                  name="chat"
                  component={TextField}
                  label={"New chat name"}
                  placeholder={'New chat name'}
                  autoComplete="title"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
            </Button>
                <Button type='submit' color="primary" disabled={submitting || pristine}>
                  Create
            </Button>
              </DialogActions>
            </form>
          )} />
      </Dialog>
    </React.Fragment>
  )
}


export default FormDialog
