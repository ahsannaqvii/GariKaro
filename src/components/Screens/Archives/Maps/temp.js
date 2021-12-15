import React from 'react';
import { withScriptjs , withGoogleMap} from "react-google-maps";

import  Map from './Map';

function temp(props) {

  const MapLoader = withScriptjs(<Map />);
  
  return (

<div className="App">
  <header className="App-header">
    {/* <img src={logo} className="App-logo" alt="logo" /> */}

  </header>
  <MapLoader
       googleMapURL="https://maps.googleapis.com/maps/api/js"
      loadingElement={<div style={{ height: `100%` }} />}
  />
</div>
  );
}

export default temp;