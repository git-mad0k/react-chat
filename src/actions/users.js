import * as types from '../constants/users'
import callApi from '../utils/call-api';

export function editUser(data) {
  return (dispatch, getState) => {
    const { token } = getState().auth
    dispatch({
      type: types.USER_EDIT_REQUEST,
      payload: data      
    })
    return callApi('/users/me',token, {method: 'POST'}, {data:{...data}})
    .then(data => dispatch({
      type: types.USER_EDIT_SUCCESS,
      payload: data
    }))
    .catch(error => dispatch({
      type: types.USER_EDIT_FAILURE,
      payload: error
    }))
  }
}
