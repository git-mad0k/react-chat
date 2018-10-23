import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { signup, login } from './../actions/auth';
import WelcomePage from "../components/WelcomePage";
import { errorCloseMessage } from '../actions/errors'


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.services.errors.auth
})

const mapDistpatchToProps = dispatch => bindActionCreators ({
  signup,
  login,
  errorCloseMessage
}, dispatch)

export default connect(mapStateToProps, mapDistpatchToProps)(WelcomePage)
