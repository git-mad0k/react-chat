import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';

import { Provider } from 'react-redux'
import configureStore from './store'


const rootEl = document.getElementById('root')
const store = configureStore()

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Commponent />
    </Provider>,
    rootEl);
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
}

registerServiceWorker();
