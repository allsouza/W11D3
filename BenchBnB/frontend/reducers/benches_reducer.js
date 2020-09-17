import { RECEIVE_NEW_BENCH, RECEIVE_ALL_BENCHES } from '../actions/bench_actions'

const benchesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_NEW_BENCH:
            const newBench = {[action.bench.id]: action.bench }
            return Object.assign({}, state, newBench);
        case RECEIVE_ALL_BENCHES:
            return action.benches
        default:
            return state;
    }
}

export default benchesReducer;