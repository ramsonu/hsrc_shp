'use client';
import React from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const SampleMap = () => {
    const containerStyle = {
        width: '1000px',
        height: '700px'
    };
      
    const center = {
        lat: -3.745,
        lng: -38.523
    };

    const { isLoaded } = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDys5WcxSLhqZuSL0WxY7TZRyhIzWKXUyw"
      })
    
      const [map, setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map:any) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
    
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map:any) {
        setMap(null)
      }, [])

      return (
        <>
        {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <></>
        </GoogleMap>
    )} </>);
};

export default SampleMap;