import { connect } from "react-redux"
import SessionForm from '../auth/session_form'
import { login } from '../../actions/user_actions'

const mSTP = (state, ownProps) => {
    return ({
        errors: state.errors,
        formType: "Login"
    })
}

const mDTP = dispatch => {
    return ({
        processForm: user => dispatch(login(user))
    })
}

export default connect(mSTP, mDTP)(SessionForm);