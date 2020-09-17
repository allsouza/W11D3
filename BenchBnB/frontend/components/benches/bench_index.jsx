import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component{

    render(){     
        const benches = this.props.benches.map(bench => <BenchIndexItem key={bench.id} bench={bench} />)
        return(
            <ul>
                {benches}
            </ul>
        )
    }
}

export default BenchIndex;