'use client';
import React from 'react';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const MultiPoints = () => {
  const [map, setMap] = React.useState(null)
  const containerStyle = {
    width: '1000px',
    height: '700px'
};
// const center = {
//   lat: -3.745,
//   lng: -38.523
// };
const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDys5WcxSLhqZuSL0WxY7TZRyhIzWKXUyw',
  });
  const markers = [
    { lat: 17.385044, lng: 78.486671 },
    { lat: 17.441660, lng: 78.386940 },
    { lat: 17.448294, lng: 78.391487 },
    { lat: 17.471680, lng: 78.390038 },
    { lat: 17.495831, lng: 78.373627 },
  ];

  const onLoad = (map:any) => {
    const bounds = new google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };

  const onUnmount = React.useCallback(function callback(map:any) {
    setMap(null)
  }, [])

  return (
    <>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap mapContainerStyle={containerStyle}  
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}>
          {markers.map(({ lat, lng }) => (
            <Marker position={{ lat, lng }} icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"} />
          ))}
        </GoogleMap>
      )}
    </>
  );
};
export default MultiPoints;