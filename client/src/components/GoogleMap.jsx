import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: -1.2884,
              lng: 36.8233
            }
          }
        >
          <Marker
            onClick={this.onMarkerClick}
            name={'Kenyatta International Convention Centre'}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      );
    }
  }

export default GoogleApiWrapper({
        apiKey:'AIzaSyDkNLe561dEWasSgEZxeltEnhnJty3l3T0'
})(MapContainer);

// import GoogleMapReact from 'google-map-react';



// const GoogleMap = () => {

// const coordinates = { lattitude: 0 , longitude: 0};
//     return (
// <div className = 'google-map'>
// <GoogleMapReact 
// bootstrapURLKeys={{ key: 'AIzaSyDkNLe561dEWasSgEZxeltEnhnJty3l3T0' }}
// defaultCenter={coordinates}
// center={coordinates}
// onChange={''}
// onChildClick={''}
// />
// </div>
// );
// }
// <script async
//     src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDkNLe561dEWasSgEZxeltEnhnJty3l3T0&callback=initMap">
// </script>

// export default GoogleMap;