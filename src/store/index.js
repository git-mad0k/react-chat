import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
import logger from '../middlewares/logger'

const enhancer = applyMiddleware(thunkMiddleware, logger)

const configureStore = () => {
  return createStore(
    rootReducer,
    enhancer
  )
}

export default configureStore
