import { combineReducers } from 'redux'
import * as type from '../constants' 

const initialState = {
  isFetching: {
    singup: false,
    login: false,
    logout: false,
    reciveAuth: false,
    allChats: false,
    myChats: false,
    chat: false,
    createChat: false,
    joinChat: false,
    leaveChat: false,
    deleteChat: false,
    sockets: false,
    editUser: false
  }
}

export const isFetching = (state = initialState.isFetching, action) => {
  switch(action.type) {
    case type.SINGUP_REQUEST:
      return { ...state, signup: true }
    case type.LOGIN_REQUEST:
      return { ...state, login: true }
    case type.LOGOUT_REQUEST:
      return { ...state, logout: true }
    case type.RECEIVE_AUTH_REQUEST:
      return { ...state, reciveAuth: true }
    case type.FETCH_ALL_CHATS_REQUEST:
      return { ...state, allChats: true }
    case type.FETCH_MY_CHATS_REQUEST:
      return { ...state, myChats: true }
    case type.FETCH_CHAT_REQUEST:
      return { ...state, chat: true }
    case type.CREATE_CHAT_REQUEST:
      return { ...state, createChat: true }
    case type.JOIN_CHAT_REQUEST:
      return { ...state, joinChat: true }
    case type.LEAVE_CHAT_REQUEST:
      return { ...state, leaveChat: true }
    case type.DELETE_CHAT_REQUEST:
      return { ...state, deleteChat: true }
    case type.SOCKET_CONNECTION_REQUEST:
      return { ...state, sockets: true }
    case type.USER_EDIT_REQUEST:
      return { ...state, editUser: true }

    case type.SINGUP_SUCCESS:
    case type.SINGUP_FAILURE:
      return { ...state, signup: false }
    case type.LOGIN_SUCCESS:
    case type.LOGIN_FAILURE:
      return { ...state, login: false }
    case type.LOGOUT_SUCCESS:
    case type.LOGOUT_FAILURE:
      return { ...state, logout: false }
    case type.RECEIVE_AUTH_SUCCESS:
    case type.RECEIVE_AUTH_FAILURE:
      return { ...state, reciveAuth: false }
    case type.FETCH_ALL_CHATS_SUCCESS:
    case type.FETCH_ALL_CHATS_FAILURE:
      return { ...state, allChats: false }
    case type.FETCH_MY_CHATS_SUCCESS:
    case type.FETCH_MY_CHATS_FAILURE:
      return { ...state, myChats: false }
    case type.FETCH_CHAT_SUCCESS:
    case type.FETCH_CHAT_FAILURE:
      return { ...state, chat: false }
    case type.CREATE_CHAT_SUCCESS:
    case type.CREATE_CHAT_FAILURE:
      return { ...state, createChat: false }
    case type.JOIN_CHAT_SUCCESS:
    case type.JOIN_CHAT_FAILURE:
      return { ...state, joinChat: false }
    case type.LEAVE_CHAT_SUCCESS:
    case type.LEAVE_CHAT_FAILURE:
      return { ...state, leaveChat: false }
    case type.DELETE_CHAT_SUCCESS:
    case type.DELETE_CHAT_FAILURE:
      return { ...state, deleteChat: false }
    case type.SOCKET_CONNECTION_SUCCESS:
    case type.SOCKET_CONNECTION_FAILURE:
      return { ...state, sockets: false }
    case type.USER_EDIT_SUCCESS:
    case type.USER_EDIT_FAILURE:
      return { ...state, editUser: false }
    default: 
      return state
  }
}

export default combineReducers({
  isFetching
})
