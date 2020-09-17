import { connect } from "react-redux"
import { fetchBenches } from '../../actions/bench_actions'
import { updateBounds } from '../../actions/filter_action'
import Search from './search'

const mSTP = (state, ownProps) => {
    
    return ({
        benches: Object.values(state.entities.benches),
        bounds: state.ui.filters.bounds
    })
}

const mDTP = dispatch => {
    return ({
        fetchBenches: (bounds) => dispatch(fetchBenches(bounds)),
        updateBounds: (bounds) => dispatch(updateBounds(bounds))
    })
}

export default connect(mSTP, mDTP)(Search)