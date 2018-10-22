import * as types from '../constants/chats'
import callApi from '../utils/call-api'
import {redirect} from './services'

export function fetchMyChats() {
  return (dispatch, getState) => {
    const { token } = getState().auth
    dispatch({
      type: types.FETCH_MY_CHATS_REQUEST
    })
    return callApi('/chats/my', token )
      .then(data => dispatch({
        type:types.FETCH_MY_CHATS_SUCCESS,
        payload: data
      }))
      .catch(error => dispatch({
        type: types.FETCH_MY_CHATS_FAILURE,
        payload: error.message
      }))
  }
}

export function fetchAllChats() {
  return (dispatch, getState) => {
    const { token } = getState().auth
    dispatch({
      type: types.FETCH_ALL_CHATS_REQUEST
    })
    return callApi('/chats', token )
      .then(data => dispatch({
        type:types.FETCH_ALL_CHATS_SUCCESS,
        payload: data
      }))
      .catch(error => dispatch({
        type:types.FETCH_ALL_CHATS_FAILURE,
        payload:error.message
      }))
  }
}

export function fetchChat(chatId) {
  return (dispatch, getState) => {
    const { token } = getState().auth
    dispatch({
      type: types.FETCH_CHAT_REQUEST
    })
    return callApi(`/chats/${chatId}`, token)
      .then(data => {
        dispatch({
          type: types.FETCH_CHAT_SUCCESS,
          payload: data
        })
        return data
      })
      .catch(error => {
        dispatch({
          type: types.FETCH_CHAT_FAILURE,
          payload: error.message
        })
        //dispatch(redirect('/chat'))
      })
  }
}

export function setActiveChat(chatId) {
  return (dispatch) => {
    return dispatch(fetchChat(chatId))
      .then(data => {        
          if (!data) {
            dispatch(redirect('/chat'))

            return dispatch ({
              type: types.UNSET_ACTIVE_CHAT
            })
          }
        dispatch({
          type: types.SET_ACTIVE_CHAT,
          payload: data
        })
      })
    
  }
}

export function createChat(chat) {
  return (dispatch, getState) => {
    const { token } = getState().auth
    dispatch({
      type: types.CREATE_CHAT_REQUEST
    })
    return callApi('/chats', token, { method: 'POST' }, { 'data': { ...chat } })
      .then(({ chat }) => {
        dispatch({
          type: types.CREATE_CHAT_SUCCESS,
          payload: { chat },
        })
        dispatch(redirect(`/chat/${chat._id}`))

        return chat
      })
      .catch(error => dispatch({
        type: types.CREATE_CHAT_FAILURE,
        payload: error.message
      }))
  }
}

export function joinChat(chatId) {
  return (dispatch,getState) => {
    const { token } = getState().auth
    dispatch({
      type: types.JOIN_CHAT_REQUEST,
      payload: { chatId }
    })
    return callApi(`/chats/${chatId}/join`, token)
    .then(({chat}) => {
      dispatch({
        type: types.JOIN_CHAT_SUCCESS,
        payload: {chat}
      })

      dispatch(redirect(`/chat/${chat._id}`))
      
      return chat
    })
    .catch(error => dispatch({
      type: types.JOIN_CHAT_FAILURE,
      payload: error,
    }))
  }
}

export function leaveChat(chatId) {
  return (dispatch, getState) => {
    const { token } = getState().auth
    dispatch({
      type: types.LEAVE_CHAT_REQUEST,
      payload: chatId
    })
    return callApi(`/chats/${chatId}/leave`, token)
      .then(data => {
        dispatch({
          type: types.LEAVE_CHAT_SUCCESS,
          payload: data
        })
        dispatch(redirect('/chat'));
        return data
      })    

      .catch(error => dispatch({
        type: types.LEAVE_CHAT_FAILURE,
        payload: error.message
      }))
  }
}

export function deleteChat(chatId) {
  return (dispatch, getState) => {
    const {token} = getState().auth
    dispatch({
      type: types.DELETE_CHAT_REQUEST
    })
    return callApi(`/chats/${chatId}`, token, {method: 'DELETE'} )
    .then(data => {
      dispatch({
        type: types.DELETE_CHAT_SUCCESS,
        payload: data
      })

      dispatch({
        type: types.UNSET_ACTIVE_CHAT
      })

      dispatch(redirect(`/chat`))
    })
    .catch( error => dispatch({
      type: types.DELETE_CHAT_FAILURE,
      payload: error.message
    }))
  }
}

export function sendMessage(chatId, content) {
  return (dispatch, getState) => {
    const { token } = getState().auth
    dispatch({
      type: types.MESSAGE_SEND_REQUEST,
      payload: { chatId, content}
    })
    return callApi(`/chats/${chatId}`, token, { method: 'POST' }, { 'data': { content } })
      .then(data => {
        dispatch({
        type: types.MESSAGE_SEND_SUCCESS,
        payload: data
        })
        dispatch(fetchChat(chatId))
      })
      .catch(error => dispatch({
        type: types.MESSAGE_SEND_FAILURE,
        payload: error.message
      }))
  }
}