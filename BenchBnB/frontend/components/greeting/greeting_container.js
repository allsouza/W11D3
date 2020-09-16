import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../util/session_api_util'

const mSTP = state => {
    return ({
        currentUser: state.entities.users[state.session.id]
    })
}

const mDTP = dispatch => {
    return ({
        logout: () => dispatch(logout())
    })
}

export default connect(mSTP, mDTP)(Greeting);