import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import LockIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from '@material-ui/core/TextField';


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

class RegisterPage extends React.Component {

  state = {
    username: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
    repeatPassword: {
      value: '',
      isValid: true,
    },    
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

  submitForm = e => {
    e.preventDefault()   

    if (!this.validatePassword()) {
      console.log('Passwords do not match')
      return;
    } 

    const { username, password } = this.state
    this.props.onSubmit(username.value, password.value)

  }
  validatePassword = () => {
    const { password, repeatPassword } = this.state;
    const isValid = password.value === repeatPassword.value;

    this.setState({
      password: { ...password, isValid },
      repeatPassword: { ...repeatPassword, isValid },
    });

    return isValid;
  }

  validate = () => {
    const { username, password, repeatPassword } = this.state;
    if (username.value.length && password.value.length && repeatPassword.value.length) {      
      return true      
    }    
    return false;
  };

  render() {
    const { classes } = this.props;
    const { username, password, repeatPassword } = this.state
    return (
      <React.Fragment>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography variant="display1">Sign up</Typography>
        <form className={classes.form} onSubmit={this.submitForm}>          
          <TextField
            name="username"
            placeholder={'Enter your login'}
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
            autoComplete="new-password"
            required
            fullWidth
            label={'New password'}            
          />
        
          <TextField 
            name="repeatPassword"
            placeholder={'Repaet your password'}
            type="password"
            onChange={this.handlerFormInput}
            value={repeatPassword.value}
            error={!repeatPassword.isValid}
            autoComplete="new-password"
            required
            fullWidth
            label={'Reapeat password'}
          />
          <Button
            type="submit"
            fullWidth
            variant="raised"
            color="primary"
            className={classes.submit}
            disabled={!this.validate()}           
          >
            Sign up
              </Button>
        </form>
      </React.Fragment>
    );
  }
}


export default withStyles(styles)(RegisterPage)
