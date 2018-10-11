import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import LockIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

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

class LoginPage extends React.Component {
  state = {
    username: {
      value: '',
      isValid: true
    },
    password: {
      value: '',
      isValid: true
    }    
  };

  handlerFormInput = e => {
    e.persist()
    const { name, value } = e.currentTarget;
    this.setState((prevState) => ({
      [name]: {
        ...prevState[name],
        value
      }
    }))
  };

  // handlerChecked = e => {
  //   e.persist()
  //   const { name, checked } = e.currentTarget;
  //   this.setState({ [name]: checked });
  // };

  submitForm = e => {
    e.preventDefault()

    const { username, password } = this.state
    this.props.onSubmit(username.value, password.value )

    this.setState({
      username: {
        value: '',
        isValid: true
      },
      password: {
        value: '',
        isValid: true
      },
     
    })

  }

  validate = () => {
    const { username, password } = this.state;
    if (username.value.length && password.value.length) {
      return true;
    }
    return false;
  };
  render() {
    const { classes } = this.props;
    const { username, password } = this.state
    return (
      <React.Fragment>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography variant="display1">Sign in</Typography>
        <form className={classes.form}>
          <TextField
            name="username"
            placeholder={'Enter your Login'}
            type="text"
            onChange={this.handlerFormInput}
            value={username.value}
            error={!username.isValid}
            autoComplete="username"
            required
            fullWidth
            label={'Login'}
          />
          <TextField
            name="password"
            placeholder={'Enter your password'}
            type="password"
            onChange={this.handlerFormInput}
            value={password.value}
            error={!password.isValid}
            autoComplete="current-password"
            required
            fullWidth
            label={'Password'}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="raised"
            color="primary"
            className={classes.submit}
            disabled={!this.validate()}
            onClick={this.submitForm}
          >
            Sign in
              </Button>
        </form>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(LoginPage);
