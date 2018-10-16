import  auth  from './auth';
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

export default combineReducers ({
  auth,
  form,
})
