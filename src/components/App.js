import React from 'react'

import { Router } from 'react-router-dom'
import history from '../utils/history'
import Root from './Root'


const App = () => (
    <Router history={history}>
      <Root /> 
    </Router>

);
export default App
