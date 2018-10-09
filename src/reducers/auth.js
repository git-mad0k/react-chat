import { 
  SINGUP_REQUEST, SINGUP_SUCCESS, SINGUP_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE,
 } from '../constants'

const token = localStorage.getItem('token')

const initialState = {
  isAuthenticated: !! token,
  user: null,
  token
}

const auth = (state = initialState, action) => { 
  switch (action.type) {
    case SINGUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      }
    case SINGUP_FAILURE:
    case LOGIN_FAILURE:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: ''
      }
    default:
      return state
  }
}
export default auth


