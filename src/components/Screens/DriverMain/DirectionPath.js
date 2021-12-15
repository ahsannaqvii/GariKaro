import React, {useState, useEffect} from 'react';
import {Map, InfoWindow, GoogleApiWrapper, Marker, Polyline} from 'google-maps-react'

const style = {
    width: '50%',
    height: '100vh',
    position: 'relative',
    overflow : 'hidden'
};

const MapDirection = (props) => {
    const { places, travelMode } = props
    const [path, setPath] = useState([])
    const [bounds, setBounds] = useState(null)
    const [error, setError] = useState(null)

    const initPlace = places.length > 0 ? { lat: places[0].lat, lng: places[0].lng }: { lat: -134, lng: -134 }

    useEffect(() => {
        //Set center and zoom of map
        var bounds1 = new window.google.maps.LatLngBounds();
        for (var i = 0; i < places.length; i++) {
            bounds1.extend(places[i]);
        }
        setBounds(bounds1)
    }, [places])


    useEffect(() => {
        if(places.length > 1) {

            const waypoints = places.map(p => ({
                location: { lat: p.lat, lng: p.lng },
                 stopover: true
            }))
    
            
                let first = waypoints.shift()
                let last = waypoints.pop()
                const origin = first.location;
                const destination = last.location;
                const directionsService = new window.google.maps.DirectionsService();
                const directionsDisplay = new window.google.maps.DirectionsRenderer();
    
                directionsDisplay.setMap(null);
    
                directionsService.route(
                    {
                        origin: origin,
                        destination: destination,
                        travelMode: window.google.maps.DirectionsTravelMode.DRIVING,
                        waypoints: waypoints
                    },
                    (result, status) => {
                        if (status === window.google.maps.DirectionsStatus.OK) {
                            var tempArray = []
                            for(var i = 0; i < result.routes[0].overview_path.length; i ++) {
                                var temp = {lat: result.routes[0].overview_path[i].lat(), lng: result.routes[0].overview_path[i].lng()}
                                tempArray.push(temp)
                            }
                            setPath(tempArray)
                            directionsDisplay.setDirections(result)
                            } 
                        else {
                            setError(result)
                        }
                    }
                );
        }
    }, [places])

    return ( 
        <div className="col-md-12">
            {error && <p>{error.status}</p>}
            <Map
                google={window.google}
                bounds={bounds}
                style={style}
                initialCenter={initPlace}
            >
                {places.map((p, index) => (
                    <Marker
                        key={index}
                        position={{lat: p.lat, lng: p.lng}} />
                    ))}
                
                    {path.length > 0 && 
                        <Polyline
                            path={path}
                            strokeColor="#0000FF"
                            strokeOpacity={1}
                            strokeWeight={3}
                            fillColor="#0000FF"
                            fillOpacity={0.35} />
                    }
            </Map>
        </div>
     );
}

//No need to add wrapper here, since key is already loaded in index.html
export default MapDirection;