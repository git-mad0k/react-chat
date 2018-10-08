import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
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
    marginTop: theme.spacing.unit * 3
  }
});

class LoginPage extends React.Component {
  state = {
    login: "",
    password: "",
    remember: false
  };

  handlerFormInput = e => {
    const { id, value } = e.currentTarget;
    this.setState({ [id]: value });
  };

  handlerChecked = e => {
    const { id, checked } = e.currentTarget;
    this.setState({ [id]: checked });
  };

  submitForm = e => {
    e.preventDefault()
    console.log('send', {
      ...this.state
    })
    this.setState({ login: "", password: "", remember: false })
  }

  validate = () => {
    const { login, password } = this.state;
    if (login.length && password.length) {
      return true;
    }
    return false;
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography variant="display1">Sign in</Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="login">Login</InputLabel>
            <Input
              id="login"
              name="login"
              autoComplete="login"
              onChange={this.handlerFormInput}
              value={this.state.login}
              autoFocus
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              onChange={this.handlerFormInput}
              value={this.state.password}
              autoComplete="current-password"
            />
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
                id="remember"
                onChange={this.handlerChecked}
                checked={this.state.remember}
              />
            }
            label="Remember me"
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
