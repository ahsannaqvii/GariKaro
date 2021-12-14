import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react';

function GoogleMaps (props)
{

const [latitude, setLat] = useState(props.dataFromParent[0].lat);
const [longitude, setLng] = useState(props.dataFromParent[0].lng);

 const renderMarkers = (map, maps) => {
  let marker = new window.google.maps.Marker({
  position: { lat: latitude, lng: longitude },
  map,
  title: 'Hello World!'
  });
  return marker;
 };

 return (
   <div style={{ height: '50vh', width: '100%' }}>
    <GoogleMapReact
     
     bootstrapURLKeys={{ key: 'YOUR KEY' }}
      defaultCenter={{ lat: latitude, lng: longitude }}
      defaultZoom={16}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
    >
    </GoogleMapReact>
   </div>
 );
};

export default GoogleMaps;