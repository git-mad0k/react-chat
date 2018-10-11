import { 
  SINGUP_REQUEST, SINGUP_SUCCESS, SINGUP_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE,
 } from '../constants'
import {Record} from 'immutable'

const token = localStorage.getItem('token')

const schemeRecord = Record({
  isAuthenticated: !!token,
  user: null,
  token
})

const auth = (state = new schemeRecord(), action) => { 
  switch (action.type) {
    case SINGUP_SUCCESS:
    case LOGIN_SUCCESS:
      return state
          .set('isAuthenticated', true)
          .set('user', action.payload.user)
          .set('token', action.payload.token)      
    case SINGUP_FAILURE:
    case LOGIN_FAILURE:
    case LOGOUT_SUCCESS:
      return state
        .set('isAuthenticated', false)
        .set('user', null)
        .set('token', '')
    default:
      return state
  }
}
export default auth


