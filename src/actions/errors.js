import * as types from '../constants/errors'

export function errorCloseMessage() {
  return (dispatch) => {
    dispatch({
      type: types.ERROR_MESSAGE_CLOSE
    })
  }
}
