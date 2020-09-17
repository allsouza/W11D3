
class MarkerManager{
    constructor(map){
        this.map = map;
        this.markers = {};
    }

    updateMarkers(benchesArr){
        console.log("time to update")
        const benches = {};
        benchesArr.forEach(bench =>{
            benches[bench.id] = bench
        })
        const markers = Object.keys(this.markers);
        debugger
        Object.values(benches).forEach(bench =>{
            if (!markers.includes(bench.id)){
                Object.assign(this.markers, {[bench.id]:this.createMarkerFromBench(bench)});
            }
        })
    }

    removeMarker(marker){
        debugger
        marker.setMap(null)
        delete this.marker[marker]
    }

    createMarkerFromBench(bench){
        const {lat, lng} = bench;
        return new google.maps.Marker({
            id: bench.id,
            position: {lat, lng},
            title: bench.description,
            map: this.map
        })
    }
}

export default MarkerManager;