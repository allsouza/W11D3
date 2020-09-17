import React from 'react';
import MarkerManager from '../../util/marker_manager'

class BenchMap extends React.Component{

    componentDidMount(){
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 12
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.benches);
        google.maps.event.addListener(this.map, 'idle', () =>{
            const mapBounds = this.map.getBounds();
            const northEast= mapBounds.getNorthEast();
            const southWest= mapBounds.getSouthWest();
            const bounds = { northEast: {lat: northEast.lat(), lng: northEast.lng()}, southWest: {lat: southWest.lat(), lng: southWest.lng()}}
            debugger
            // this.props.updateBounds(bounds);
            this.props.updateBounds(bounds)
        })
    }

    componentDidUpdate(){
        this.MarkerManager.updateMarkers(this.props.benches);
    }

    render(){
        return (
            <div id="map-container" ref={map => this.mapNode = map}>

            </div>
        )
    }
}

export default BenchMap;