import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { signup, login } from './../actions/auth';
import WelcomePage from "../components/WelcomePage";



const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDistpatchToProps = dispatch => bindActionCreators ({
  signup,
  login
}, dispatch)

export default connect(mapStateToProps, mapDistpatchToProps)(WelcomePage)
