import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
import logger from 'redux-logger'


const configureStore = () => {
  if (process.env.NODE_ENV === 'production') {
    const enhancer = applyMiddleware(thunkMiddleware)
    return createStore(enhancer)
  } else {
    const composeEnhancers =
      typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          serialize: true
        }) : compose;
    const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, logger))
    const store = createStore(
      rootReducer,
      enhancer
    )

    if (module.hot) {
      module.hot.accept('../reducers', () => {
        store.replaceReducer(rootReducer)
      })
    }

    return store
  }
}

export default configureStore
