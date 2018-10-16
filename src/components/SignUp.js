import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import LockIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from '@material-ui/core/TextField';
import { Field, reduxForm } from 'redux-form'

const styles = theme => ({
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  }
});

const SignUp = ({ classes, onSubmit, handleSubmit }) => {

  const submitForm = values => {
    const { username, password } = values
    onSubmit(username, password)
  }

  return (
    <React.Fragment>
      <Avatar className={classes.avatar}>
        <LockIcon />
      </Avatar>
      <Typography variant="display1">Sign up</Typography>
      <form className={classes.form} onSubmit={handleSubmit(submitForm)}>
        <Field
          name="username"
          component={renderTextField}
          label={"Login"}
          placeholder={'Enter your login'}
          autoComplete="username"
          fullWidth
        />
        <Field
          name="password"
          component={renderTextField}
          label={'New password'}
          placeholder={'Enter your password'}
          autoComplete="new-password"
          fullWidth
          type="password"
        />
        <Field
          name="repeatPassword"
          component={renderTextField}
          label={'Reapeat password'}
          placeholder={'Repaet your password'}
          type="password"
          autoComplete="new-password"
          fullWidth
        />

        <Button
          type="submit"
          fullWidth
          variant="raised"
          color="primary"
          className={classes.submit}
        >
          Sign up
              </Button>
      </form>
    </React.Fragment>
  )
}



const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
    <TextField
      label={label}
      helperText={touched && error}
      error={touched && error ? true : false}
      {...input}
      {...custom}
    />
  )

const validate = ({ username, password, repeatPassword }) => {
  const errors = {}

  if (!username) errors.username = 'Login  is reuired'
  else if (!/^[A-Za-z0-9_ \b]*$/.test(username)) errors.username = 'Allow only latin and numbers'

  if (!password) errors.password = 'Password  is reuired'

  if (password !== repeatPassword) {
    errors.password = 'Passwords  not matches'
    errors.repeatPassword = 'Passwords  not matches'
  }
  return errors
}

export default withStyles(styles)(reduxForm({
  form: 'singup',
  validate
})(SignUp))
