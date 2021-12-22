import React from 'react';
import GoogleMapReact from 'google-map-react';



const Map = () => {

const coordinates = { lattitude: 0 , longitude: 0};
    return (
<div className = 'google-map'>
<GoogleMapReact 
bootstrapURLKeys={{ key: 'AIzaSyDkNLe561dEWasSgEZxeltEnhnJty3l3T0' }}
defaultCenter={coordinates}
center={coordinates}
onChange={''}
onChildClick={''}
/>
</div>
);
}

export default Map;