import auth  from './auth';
import chats from './chats'
import messages from './messages'
import { combineReducers } from 'redux'

export default combineReducers ({
  auth,
  chats,
  messages
})

export const getActivUser = (state) => state.auth.user
export const getUserId = (user) => user.user._id

export const isCreator =  ( state, chat ) => {
  try {
    return getUserId(chat.creator) === getUserId(getActivUser(state))
  } catch(e) {
    return false
  }
}

export const isMember = ( state, chat ) => {
  try {
    return chat.members.some(
      member => getUserId(member) === getUserId(getActivUser(state))
    )
  } catch(e) {
    return false
  }
}

export const isChatMember = (state, chat) => {
  return isCreator(state,chat) || isMember(state, chat)
}
