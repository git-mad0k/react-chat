import * as types from '../constants/messages'

import callApi from '../utils/call-api';

export function sendMessage(chatId, content) {
  return (dispatch, getState) => {
    const { token } = getState().auth
    dispatch({
      type: types.MESSAGE_SEND_REQUEST
    })
    return callApi(`/chats/${chatId}`, token, { method: 'POST' }, { 'data':{...content}})
    .then(data => dispatch({
      type: types.MESSAGE_SEND_SUCCESS,
      payload: data
    }))
    .catch(error => dispatch({
      type: types.MESSAGE_SEND_FAILURE,
      payload: error.message
    }))
  }
}
