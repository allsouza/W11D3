import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/user_actions'

const mSTP = (state, ownProps) => {
    return ({
        errors: state.errors,
        formType: "Sign Up",
    })
}

const mDTP = dispatch => {
    return ({
        processForm: user => dispatch(signup(user))
    })
}

export default connect(mSTP, mDTP)(SessionForm);