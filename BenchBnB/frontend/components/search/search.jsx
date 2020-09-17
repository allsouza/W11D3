import React from "react"
import BenchMap from '../benches/bench_map'
import BenchIndex from '../benches/bench_index'

const Search = ({benches, fetchBenches, updateBounds, bounds}) => {
    return(
        <div>
            <BenchMap benches={benches} updateBounds={updateBounds}/>
            <BenchIndex benches={benches} bounds={bounds} fetchBenches={fetchBenches}/>
        </div>
    )
}

export default Search;