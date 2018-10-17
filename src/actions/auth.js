import * as types from '../constants'
import callApi from '../utils/call-api';

export function signup(username, password) {
  return (dispatch) => {
    dispatch({
      type: types.SINGUP_REQUEST,
    })
    return callApi('/signup', undefined, { method: "POST" }, {
        username,
        password
      })
      .then(json => {
        if (json.success) {
          return json
        }
        throw new Error(json.message)
      })
      .then(json => {
        if (!json.token) {
         throw new Error('Token has not benn provided!')   
        }
        localStorage.setItem('token', json.token) 
        dispatch({
          type: types.SINGUP_SUCCESS,
          payload: json
        })
      }
      )
      .catch(reason => dispatch({
        type: types.SINGUP_FAILURE,
        payload: reason
      }))
  }
}


export function login(username, password) {
  return (dispatch) => {
    dispatch({
      type: types.LOGIN_REQUEST,
    })
    return callApi('/login', undefined, { method: "POST"}, {
        username,
        password,
      }) 
    .then(json => {
      if (json.success) {
        return json
      }
      throw new Error (json.message)
      })
    .then(json => {
      if (!json.token) {
        throw new Error('Token has not benn provided!')
      }
      localStorage.setItem('token',json.token)
      dispatch({
        type: types.SINGUP_SUCCESS,
        payload: json
      })}
    )
      
    .catch(reason => dispatch({
      type: types.SINGUP_FAILURE,
        payload: reason
      }))
  }
}


export function logout() {
  return (dispatch) => {
    localStorage.removeItem('token')
    dispatch({
      type: types.LOGOUT_SUCCESS
    })
  }
}

export function receiveAuth() {
  return (dispatch, getState) => {
    const { token } = getState().auth

    if (!token) {
      dispatch({
        type: types.RECEIVE_AUTH_FAILURE,
      })
    }

    return callApi('/users/me', token)     
    .then(json => {
      dispatch({
        type: types.RECEIVE_AUTH_SUCCESS,
        payload: json
      })
    })
    .catch(error => {
      dispatch({
        type: types.RECEIVE_AUTH_FAILURE,
        payload: error
      })
    })
    
  }
}
