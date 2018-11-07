import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';

const configureStore = () => {
  if (process.env.NODE_ENV === 'production') {
    const enhancer = applyMiddleware(thunkMiddleware);
    return createStore(rootReducer, enhancer);
  }
  const composeEnhancers =
    typeof window === 'object' &&
    /* eslint-disable no-underscore-dangle */
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        serialize: true,
      })
      : compose;
  /* eslint-enable no-underscore-dangle */
  const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, logger));
  const store = createStore(rootReducer, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
