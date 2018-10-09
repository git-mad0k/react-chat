import React from 'react'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ChatPage from '../containers/ChatPage'
import WelcomePage from '../containers/WelcomePage'
import { Provider } from 'react-redux'
import configureStore from '../store'
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'
import pink from '@material-ui/core/colors/pink'

const store = configureStore()


const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
    secondary: {
      light: pink[300],
      main: pink[500],
      dark: pink[700],
    },
    error: red,
  },
  typography: {
    fontSize: 14,
  }
});

const styles = theme => ({

})

const App = () => (
  <Provider store={store}>
    <Router>
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/(welcome)?" component={WelcomePage} />
          <Route path="/welcome" component={WelcomePage} />
          <Route path="/chat" component={ChatPage} />
          <Redirect to="/" />
        </Switch>
      </MuiThemeProvider>
    </Router>
  </Provider>
);
export default withStyles(styles)(App)
