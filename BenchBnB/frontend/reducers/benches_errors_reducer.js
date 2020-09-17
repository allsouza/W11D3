import { RECEIVE_BENCH_ERRORS } from "../actions/bench_actions";

const benchErrorsReducer = (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_BENCH_ERRORS:
            return [...action.errors.responseJSON]
        default:
            return [];
    }
}

export default benchErrorsReducer;