import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
// import "./style.css";


function GoogleMaps(props) {

        const [showingInfoWindow, setInfo] = useState(false);
        const [activeMarker, setMarker] = useState({});
        const [selecetdPlace, setPlace] = useState({});

        // const setLng = props.dataFromParent[0].lng;
        // const setLat = props.dataFromParent[0].lat;
         const [Lng, setLng] = useState(props.dataFromParent[0].lng);
         const [Lat, setLat] = useState(props.dataFromParent[0].lat);
        // 
        // console.log(origin);
      
        //  <Maps dataFromParent={[pickUp,dest]}/>
        useEffect(()=>{
          console.log("value");
         
        // setTimeout(()=>{
        //  setLng(props.dataFromParent[0].lng);
        //  setLat( props.dataFromParent[0].lat);
          // },500);

          console.log("value");
          console.log(props.dataFromParent[0].lng);
         
        },[props.dataFromParent[0].lng,props.dataFromParent[0].lat]);

        const apiIsLoaded = (map, maps) => {
        const directionsService = new window.google.maps.DirectionsService();
         const directionsRenderer = new window.google.maps.DirectionsRenderer();
            directionsRenderer.setMap(map);
      
          //  const origin = {lng: this.state.coordinates[1] , lat: this.state.coordinates[0]};
          //  const origin= {lng: 67.0632675 , lat: 24.9180271};
          const origin ={lat: props.dataFromParent[0].lat , lng: props.dataFromParent[0].lng};
           console.log(origin);
          console.log("helllllo");
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
        
            <div style={{ height: "650px", width: "90%" , marginTop: "1.5rem"}}  id="renderr">
              <GoogleMapReact
                // bootstrapURLKeys={{
                //   key: "GOOGLE_API_YOUR_KEY"
                // }}
                defaultCenter={{ lng: 67.0011 , lat: 24.8607  }}
                defaultZoom={10}
                // center={this.currentLocation}
                yesIWantToUseGoogleMapApiInternals
               onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
              />
            </div>
          </div>
        );
      }
    
export default GoogleMaps;

// useEffect(()=> {

          //   console.log("Value cahnged");
          //   onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)};


          // //    document.getElementById("renderr").innerHTML=
          // //  '<GoogleMapReact   defaultCenter={{ lng: 67.0011 , lat: 24.8607  }defaultZoom={10}  defaultCenter={{ lng: 67.0011 , lat: 24.8607  }} defaultZoom={10} yesIWantToUseGoogleMapApiInternals onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)} />';
          
          // },[props.dataFromParent[0].lng]);
        