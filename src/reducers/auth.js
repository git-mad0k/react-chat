import { Record } from 'immutable';
import * as types from '../constants';

const token = localStorage.getItem('token');

const SchemeRecord = Record({
  isAuthenticated: !!token,
  user: null,
  token,
});

const auth = (state = new SchemeRecord(), action) => {
  switch (action.type) {
    case types.SINGUP_SUCCESS:
    case types.LOGIN_SUCCESS:
      return state
        .set('isAuthenticated', true)
        .set('user', action.payload.user)
        .set('token', action.payload.token);
    case types.RECEIVE_AUTH_SUCCESS:
    case types.USER_EDIT_SUCCESS:
      return state.set('isAuthenticated', true).set('user', action.payload.user);
    case types.SINGUP_FAILURE:
    case types.LOGIN_FAILURE:
    case types.RECEIVE_AUTH_FAILURE:
    case types.LOGOUT_SUCCESS:
      return state
        .set('isAuthenticated', false)
        .set('user', null)
        .set('token', '');
    default:
      return state;
  }
};
export default auth;
