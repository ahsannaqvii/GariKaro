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
    
    
      handleChange = address => {
        this.setState({ Address: address});
      };
      
      handleSelect = async (address, id) => {
        const results = await geocodeByAddress(address);
        const latlng = await getLatLng(results[0]);
        this.setState({Address: address});
        this.setState({coordinates: Object.entries(latlng).slice(0).map(entry => entry[1])});
        
         if(this.props.name == 'setPick'){
          this.props.parentCallback({address: this.state.Address, lat: this.state.coordinates[0],
          lng: this.state.coordinates[1]});
        }
        else{
           this.props.parentCallback({address: this.state.Address, lat: this.state.coordinates[0],
           lng: this.state.coordinates[1]});
        }
      };
      
     searchOptions = { 
       componentRestrictions: {country :'pk'},
       types: ['geocode']  //Enter karachi geocode (Not Working)
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

//Key loaded only once
// export default GoogleApiWrapper({
//     apiKey: ('Google_API_Key')
//   })(MapContainer)
 
export default MapContainer;