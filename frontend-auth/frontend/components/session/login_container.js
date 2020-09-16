import {connect} from 'react-redux';
import {login} from '../../actions/session';
import Login from './login';

const mDTP = dispatch => {
    return ({
        login: userForm => dispatch(login(userForm))
    })
}

export default connect(null, mDTP)(Login);