import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
import logger from '../middlewares/logger'

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware, 
      logger )
  )
}

export default configureStore
