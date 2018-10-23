import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { logout } from '../actions/auth'
import { editUser } from './../actions/users';
import ChatPage from '../components/ChatPage'
import { fetchAllChats, fetchMyChats, setActiveChat, createChat, joinChat, leaveChat, deleteChat  } from '../actions/chats'
import { sendMessage, mountChat, unmountChat, socketsConnect  } from '../actions/sockets'
import { errorCloseMessage } from '../actions/errors'
import * as fromChats from '../reducers/chats'
import * as fromState from '../reducers'

const mapStateToProps = state => {
  const activeChat = fromChats.getById(state.chats, state.chats.activeId)

  return ({
  isAuthenticated: state.auth.isAuthenticated,
  chats: {
    active: activeChat,
    my: fromChats.getByIds(state.chats, state.chats.myIds),
    all: fromChats.getByIds(state.chats, state.chats.allIds),
  },
  activeUser: {
    ...state.auth.user,
    isMember: fromState.isMember(state, activeChat),
    isCreator: fromState.isCreator(state, activeChat),
    isChatMember: fromState.isChatMember(state, activeChat),
  },
  messages: state.messages,
  error: state.services.errors.chat
})}

const mapDistpatchToProps = dispatch => bindActionCreators ({
  logout,
  fetchAllChats,
  fetchMyChats,
  setActiveChat,
  createChat,
  joinChat,
  leaveChat,
  deleteChat,
  editUser,
  sendMessage, 
  mountChat, 
  unmountChat, 
  socketsConnect,
  errorCloseMessage
}, dispatch)

export default connect(mapStateToProps, mapDistpatchToProps)(ChatPage)
