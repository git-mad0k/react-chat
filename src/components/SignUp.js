import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import LockIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from './Forms/TextField'
import { Form, Field } from 'react-final-form'


const styles = theme => ({
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  }
});

const SignUp = ({ classes, onSubmit }) => { 
  return (
    <React.Fragment>
      <Avatar className={classes.avatar}>
        <LockIcon />
      </Avatar>
      <Typography variant="display1">Sign up</Typography>
      <Form 
        onSubmit={onSubmit}
        initialValues={{ employed: true, stooge: 'larry' }}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
      <form className={classes.form} onSubmit={handleSubmit}>
        <Field
          name="username"
              component={TextField}
          label={"Login"}
          placeholder={'Enter your login'}
          autoComplete="username"
          fullWidth
        />
        <Field
          name="password"
              component={TextField}
          label={'New password'}
          placeholder={'Enter your password'}
          autoComplete="new-password"
          fullWidth
          type="password"
        />
        <Field
          name="repeatPassword"
              component={TextField}
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
          disabled={submitting || pristine}
        >
          Sign up
              </Button>
      </form>
        )}
      />
    </React.Fragment>
  )
}





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

export default withStyles(styles)(SignUp)
