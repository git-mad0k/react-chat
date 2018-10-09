import React from 'react'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ChatPage from '../containers/ChatPage'
import WelcomePage from '../containers/WelcomePage'
import { Provider } from 'react-redux'
import configureStore from '../store'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Router>
        <Switch>
          <Route exact path="/(welcome)?" component={WelcomePage} />
          <Route path="/welcome" component={WelcomePage} />
          <Route path="/chat" component={ChatPage} />
          <Redirect to="/" />
        </Switch>
    </Router>
  </Provider>
);
export default App
