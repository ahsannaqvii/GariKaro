import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';


export class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Address: " ",
            coordinates: [null,null]  //For lat and lng
        };
    }

    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    
    
    // handleChange = address => {
    //     this.setState({ Address: address});
    //     console.log(this.state.Address);
    //   };
     
    //   handleSelect = async address => {
    //     const results = await geocodeByAddress(address);
    //     const latlng = await getLatLng(results[0]);
    //     this.setState({Address: address});
    //     this.setState({coordinates: latlng});
    //     console.log(this.state.Address);
    //     console.log(this.state.coordinates);
    //     //   .then(results => getLatLng(results[0]))
    //     //   .then(latLng => console.log('Success', latLng))
    //     //   .catch(error => console.error('Error', error));
    //   };

      handleChange = address => {
        this.setState({ Address: address});
        //setAddress(address);
        // console.log(Address);
        console.log(this.state.Address);
      };
      
      handleSelect = async address => {
        const results = await geocodeByAddress(address);
        const latlng = await getLatLng(results[0]);
        // setAddress(address);
        // setCoordinates(Object.entries(latlng).slice(0).map(entry => entry[1]));
        this.setState({Address: address});
        this.setState({coordinates: Object.entries(latlng).slice(0).map(entry => entry[1])});
      
        console.log(this.state.Address);
        // console.log(coordinates[0]);
        // console.log(coordinates[1]);
        console.log(this.state.coordinates);
        console.log(this.state.coordinates[0]); //lat
        console.log(this.state.coordinates[1]); //lng;
        //   .then(results => getLatLng(results[0]))
        //   .then(latLng => console.log('Success', latLng))
        //   .catch(error => console.error('Error', error));
      };
      
     searchOptions = {
      
       componentRestrictions: {country :'pk'},
       types: ['geocode']  //Enter karachi geocode
      
     };
     
      render() {
  

      return (
          <div id= "googleMap">
               <PlacesAutocomplete
                  value={this.state.Address}
                  onChange={this.handleChange}
                  onSelect={this.handleSelect}
                  searchOptions= {this.searchOptions}  
                  >
      
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: 'Enter Location',
                    className: 'location-search-input',
                  })}
                />
            <div className="autocomplete-dropdown-container">

              {loading && <div>Loading...</div>} 

              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      </div>
        )
    }
}


// export default GoogleApiWrapper({
//     apiKey: ('AIzaSyDkYqldBm1XifwNFpF21vNpwZQlCb0ldPk')
//   })(MapContainer)
 
export default MapContainer;