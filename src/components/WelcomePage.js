import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from "@material-ui/core/Paper";
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import Grid from '@material-ui/core/Grid';
import withStyles from "@material-ui/core/styles/withStyles";
import { Redirect } from 'react-router-dom'


const styles = theme => ({
  layout: {
    width: "auto",    
    display: "block", // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,    
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 600,      
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  root: {
    flexGrow: 1,
    height: '80%'
  },
  indicator: {
    backgroundColor: theme.palette.primary.dark
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    minHeight: 450,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'space-around',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
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

class WelcomePage extends React.Component {
  state = {
   tab: 'login'
  };

  handleChange = (e, value) => {
    this.setState({ tab: value })
  }

  render() {
    const { classes, login, singup, isAuthenticated } = this.props;
    const { tab } = this.state

    if (isAuthenticated) {
      return <Redirect to={'/chat'} />
    }
    return (
      <React.Fragment>
        <Grid container className={classes.root}
          alignItems={'center'}
          direction={'column'}
          justify={'center'}
        >
          <Grid
            container            
            className={classes.layout}
          >
            <Paper className={classes.paper}>
              <AppBar position="static">
                <Tabs value={tab} onChange={this.handleChange} fullWidth classes={{
                  indicator: classes.indicator
                }}>
                  <Tab label="Login Page" value="login" />
                  <Tab label="Register" value="register" />
                </Tabs>
              </AppBar>
              {tab === 'login' && <LoginPage onSubmit={login} />}
              {tab === 'register' && <RegisterPage onSubmit={singup} />}
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(WelcomePage);
