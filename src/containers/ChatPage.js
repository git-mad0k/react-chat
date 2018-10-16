import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { logout } from '../actions/auth'
import ChatPage from '../components/ChatPage'

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDistpatchToProps = dispatch => bindActionCreators ({
  logout
}, dispatch)

export default connect(mapStateToProps, mapDistpatchToProps)(ChatPage)
