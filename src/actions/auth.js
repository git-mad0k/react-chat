import {
  SINGUP_REQUEST, SINGUP_SUCCESS, SINGUP_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE,
} from '../constants'

export function signup(username, password) {
  return (dispatch) => {
    dispatch({
      type: SINGUP_REQUEST,
    })
    return fetch('http://localhost:8000/v1/signup', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
    .then((res) => res.json())
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
          type: SINGUP_SUCCESS,
          payload: json
        })
      }
      )
      .catch(reason => dispatch({
        type: SINGUP_FAILURE,
        payload: reason
      }))
  }
}


export function login(username, password) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
    })
    return fetch('http://localhost:8000/v1/login', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
    .then((res) => res.json())
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
        type: SINGUP_SUCCESS,
        payload: json
      })}
    )
      
    .catch(reason => dispatch({
        type: SINGUP_FAILURE,
        payload: reason
      }))
  }
}


export function logout() {
  return (dispatch) => {
    localStorage.removeItem('token')
    dispatch({
      type: LOGOUT_SUCCESS
    })
  }
}
