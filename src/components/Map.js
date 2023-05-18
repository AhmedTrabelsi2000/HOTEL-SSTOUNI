import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = withGoogleMap(({ lat, lng }) => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat, lng }}
    center={{ lat, lng }}
    options={{
      zoomControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    }}
  >
    <Marker position={{ lat, lng }} />
  </GoogleMap>
));

export default Map;