import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import MapDirectionsRenderer from "./directionRender";
const places = [
    {latitude: 24.9180,longitude: 67.0971},
    {latitude: 24.9107,longitude: 67.0311},
    // {latitude: 28.4813018,longitude: -81.4387899},
    // ...
  ]
const Map = withScriptjs(
  // debugger; 
  withGoogleMap((props) => (
    // console.log(props.places);
    //WHEN I USE STATIC VALUES ( DEFINED UP) , IT WORKS BUT FOR PROPS.PLACES , IT DOES NOT WORK
    
    <GoogleMap defaultCenter={{ lat: 24.8607, lng: 67.0011 }} defaultZoom={8}>
      {props.places.map((marker, index) => {
        const position = { lat: marker.latitude, lng: marker.longitude };
        return <Marker key={index} position={position} />
      })}
      <MapDirectionsRenderer
        places={props.places}
        travelMode={window.google.maps.TravelMode.DRIVING}
      />
    </GoogleMap>
  ))
);


const AppMap = (props) => {
  console.log("AHSAN HERE");
  // console.log(places[0]);
  console.log(props.places); // THIS  IS GIVING ME PROPER VALUES THAT I WANTED ON INPUT 
  // debugger;
  return (
    <Map
      googleMapURL={
        "https://maps.googleapis.com/maps/api/js?key=" +
        
        "&v=3.exp&libraries=geometry,drawing,places"
      }
      places={props.places}
      // loadingElement ||
      loadingElement={<div style={{ height: `100%` }} />}
      // containerElement ||
      containerElement={<div style={{ height: "80vh" }} />}
      // mapElement ||
      mapElement={<div style={{ height: `100%` }} />}
      // defaultCenter ||
      defaultCenter={{ lat: 24.8607, lng: 67.0011 }}
      // defaultZoom ||
      defaultZoom={11}
    />
  );
};

export default AppMap;
// "AIzaSyDkYqldBm1XifwNFpF21vNpwZQlCb0ldPk" +