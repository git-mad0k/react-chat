import React from 'react'
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'
import pink from '@material-ui/core/colors/pink'
import { Route, Switch, Redirect} from 'react-router-dom'
import PrivateRoute from '../containers/PrivateRoute'
import ChatPage from '../containers/ChatPage'
import WelcomePage from '../containers/WelcomePage'



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
    action: {
      active: '#000',
      disabled: '#fff',
      disabledBackground: blue[100],
      cursor: 'disabled',
      selected: '#000',
    },
  },

  typography: {
    fontSize: 14,
  }
});

const Root = () => ( 
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/(welcome)?" component={WelcomePage} />
        <Route path="/welcome" component={WelcomePage} />
        <PrivateRoute path="/chat/:chatId?" component={ChatPage} />
        <Redirect to="/" />
      </Switch>
    </MuiThemeProvider>)

export default withStyles(theme)(Root)
