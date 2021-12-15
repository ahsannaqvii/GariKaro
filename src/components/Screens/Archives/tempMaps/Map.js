/*global google*/
import React, { Component } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    DirectionsRenderer
} from "react-google-maps";

class Map extends Component {
    state = {
        directions: null,
};

componentDidMount() {
    const directionsService = new google.maps.DirectionsService();

    // const [origin , setOrigin] = useState({lat: 24.9180271, lng:  67.0632675});
    // const [destination , setDestination] = useState({lat: 6.4667, lng:  3.4500});

    const origin = { lat: 24.9180271, lng:  67.0632675 };
    const destination = { lat: 24.8568991 , lng:  67.0632675};

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,
            waypoints: [
                {
                    location: new google.maps.LatLng(24.756,  67.46973 )
                },
                {
                    location: new google.maps.LatLng(24.859746, 67.97946)
                }
            ]
        },
        (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                console.log(result)
                this.setState({
                    directions: result
                });
            } else {
                console.error(`error fetching directions ${result}`);
            }
        }
    );
}

render() {
    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
            defaultCenter={{ lat: 6.5244, lng:  3.3792 }}
            defaultZoom={13}
        >
            <DirectionsRenderer
                directions={this.state.directions}
            />
        </GoogleMap>
    ));

    return (
        <div>
            <GoogleMapExample
                containerElement={<div style={{ height: `500px`, width: "500px" }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>


       );
    }
}

export default Map;