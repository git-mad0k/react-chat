import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { logout } from '../actions/auth'
import { editUser } from './../actions/users';
import ChatPage from '../components/ChatPage'
import { fetchAllChats, fetchMyChats, setActiveChat, createChat, joinChat, leaveChat } from '../actions/chats'
import * as fromChats from '../reducers/chats'
import * as fromState from '../reducers'

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  chats: fromChats.getByIds(state.chats, state.chats.allIds)
})

const mapDistpatchToProps = dispatch => bindActionCreators ({
  logout,
  fetchAllChats,
  fetchMyChats,
  setActiveChat,
  createChat,
  joinChat,
  leaveChat
}, dispatch)

export default connect(mapStateToProps, mapDistpatchToProps)(ChatPage)
