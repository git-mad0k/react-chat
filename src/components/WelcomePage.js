import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from "@material-ui/core/Paper";
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'

import withStyles from "@material-ui/core/styles/withStyles";


const styles = theme => ({
  layout: {
    width: "auto",
    display: "block", // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    const { classes } = this.props;
    const { tab } = this.state
    return (
      <React.Fragment>        
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <AppBar position="static">  
              <Tabs value={tab} onChange={this.handleChange} fullWidth>
                <Tab label="LoginPage" value="login"/>
                <Tab label="Register" value="register"/>               
              </Tabs>              
            </AppBar>
            {tab === 'login' && <LoginPage />}
            {tab === 'register' && <RegisterPage />}
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(WelcomePage);
