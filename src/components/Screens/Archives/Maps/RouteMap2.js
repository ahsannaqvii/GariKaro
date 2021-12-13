import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
// import "./style.css";

class GoogleMaps extends Component {
 
state = {
  showingInfoWindow: false,
  activeMarker: {},
  selectedPlace: {},
};

  render() {

    const apiIsLoaded = (map, maps) => {
      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);

      //const origin = {lng: this.state.coordinates[1] , lat: this.state.coordinates[0]};
      const origin={lng: 67.0632675 , lat: 24.9180271}
      const destination = {lng: 67.0632675 , lat: 24.8568991};
      console.log(origin);

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
      }

    return (
      <div>          
    
        <div style={{ height: "650px", width: "90%" , marginTop: "1.5rem"}}>
          <GoogleMapReact
            // bootstrapURLKeys={{
            //   key: "GOOGLE_API_YOUR_KEY"
            // }}
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