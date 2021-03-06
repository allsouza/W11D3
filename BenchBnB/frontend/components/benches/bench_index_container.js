import { connect } from "react-redux"
import { fetchBenches } from '../../actions/bench_actions'
import BenchIndex from './bench_index'

const mSTP = (state, ownProps) => {
    return ({
        benches: Object.values(state.entities.benches)
    })
}

const mDTP = dispatch => {
    return ({
        fetchBenches: () => dispatch(fetchBenches())
    })
}

export default connect(mSTP, mDTP)(BenchIndex)