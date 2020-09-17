import React from 'react';

class BenchIndexItem extends React.Component{
    render(){
        const {bench} = this.props;
        return (
        <li>
            <p>Location: Lat:{bench.lat}, Long:{bench.lng}</p>
            <p>Description: {bench.description}</p>
        </li>
    )
    }
}

export default BenchIndexItem;