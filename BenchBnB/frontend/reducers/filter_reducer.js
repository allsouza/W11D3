const { UPDATE_BOUNDS } = require("../actions/filter_action")

const filterReducer = (state = {}, action)=>{
    Object.freeze(state)
    switch (action.type) {
        case UPDATE_BOUNDS:
            return {bounds: action.bounds};
        default:
            return state;
    }
}

export default filterReducer;