import React,{useState , useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import { ArrowRight } from 'react-bootstrap-icons';

function TheMap(props){
   // const [cordinates , setCordinates] = useState(props);
    const [Lng, setLng] = useState(props.dataFromParent[0].lng);
    const [Lat, setLat] = useState(props.dataFromParent[0].lat);
    const MyCustomMarker = () => <ArrowRight color="royalblue" size={96} />
    // console.log(Lng);
    // console.log(Lat);
    
    
   
    return(
        <GoogleMapReact
            yesIWantToUseGoogleMapApiInternals
            // bootstrapURLKeys={{key:'THE KEY'}}
            defaultZoom={16}
            //center={cordinates.center}
            defaultCenter={{ lng: 67.0011 , lat: 24.8607  }}>
            {/* // onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)} */}
            <MyCustomMarker
            lat={Lat}
            lng={Lng}
        />
         
           
        </GoogleMapReact>
    )
}

export default TheMap;