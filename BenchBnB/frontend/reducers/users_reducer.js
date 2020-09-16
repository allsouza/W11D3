import { RECEIVE_CURRENT_USER } from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const newUser = {[action.user.id]: action.user}
            return Object.assign({}, state, newUser)
        default:
            return state;
    }
}

export default usersReducer;