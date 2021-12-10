import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
// import "./style.css";

class GoogleMaps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: { lat: 24.860966, lng: 66.990501}
    };
  }

  render() {
    const apiIsLoaded = (map, maps) => {
      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);
      const origin = {lng: 67.264 , lat: 24.8569};
      const destination = {lng: 67.0646 , lat: 24.9273};

      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    };
    return (
      <div>
        <div style={{ height: "400px", width: "100%" , }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDkYqldBm1XifwNFpF21vNpwZQlCb0ldPk"
            }}
            defaultCenter={{ lng: 67.0011 , lat: 24.8607  }}
            defaultZoom={10}
            center={this.state.currentLocation}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
          />
        </div>
      </div>
    );
  }
}
export default GoogleMaps;