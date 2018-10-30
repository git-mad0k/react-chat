/* eslint-disable */
import * as types from '../constants/users';
import callApi from '../utils/call-api';

export function editUser(data) {
  return (dispatch, getState) => {
    const state = getState();
    const { isFetching } = state.services;

    if (isFetching.editUser) {
      return Promise.resolve();
    }

    const { token } = state.auth;
    dispatch({
      type: types.USER_EDIT_REQUEST,
      payload: data,
    });
    return callApi('/users/me', token, { method: 'POST' }, { data })
      .then(data => dispatch({
        type: types.USER_EDIT_SUCCESS,
        payload: data,
      }))
      .catch(error => dispatch({
        type: types.USER_EDIT_FAILURE,
        payload: error,
      }));
  };
}
