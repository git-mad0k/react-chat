import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import { Redirect } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ErrorMessage from './ErrorMessage';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '80%',
  },
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
  },
  indicator: {
    backgroundColor: theme.palette.primary.dark,
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    minHeight: 450,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class WelcomePage extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    signup: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    receiveAuth: PropTypes.func.isRequired,
    errorCloseMessage: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    error: PropTypes.instanceOf(Error),
  };

  static defaultProps = {
    error: null,
  };

  state = {
    tab: 'login',
  };

  componentDidMount() {
    this.props.receiveAuth();
  }

  handleChange = (e, value) => {
    this.setState({ tab: value });
  };

  handleSingUp = (values) => {
    const { signup } = this.props;
    const { username, password } = values;
    signup(username, password);
  };

  render() {
    const {
      classes, error, login, isAuthenticated, errorCloseMessage,
    } = this.props;
    const { tab } = this.state;

    if (isAuthenticated) {
      return <Redirect to="/chat" />;
    }
    return (
      <React.Fragment>
        <Grid
          container
          className={classes.root}
          alignItems="center"
          direction="column"
          justify="center"
        >
          <Grid container className={classes.layout}>
            <Paper className={classes.paper}>
              <AppBar position="static">
                <Tabs
                  value={tab}
                  onChange={this.handleChange}
                  fullWidth
                  classes={{
                    indicator: classes.indicator,
                  }}
                >
                  <Tab label="Login Page" value="login" />
                  <Tab label="Register" value="register" />
                </Tabs>
              </AppBar>
              {tab === 'login' && <SignIn onSubmit={login} />}
              {tab === 'register' && <SignUp onSubmit={this.handleSingUp} />}
            </Paper>
          </Grid>
        </Grid>
        <ErrorMessage error={error} closeSneckBar={errorCloseMessage} />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(WelcomePage);
