import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import '../../../antD/styles/map.css';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map = props => {
  const mapContainerRef = useRef(null);
  const map = useRef();

  useEffect(() => {
    console.log('Hitting 1st useEffect()');
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-104.9876, 39.7405],
      zoom: 12.5,
    });

    map.current.on('load', () => {
      map.current.resize();
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // map.flyTo({
    //   center: mapLatLng,
    // });

    return () => map.current.remove();
  }, [props.map]);

  useEffect(() => {
    console.log('Hitting 2nd useEffect()');
    map.current.flyTo({
      center: props.mapLatLng,
    });
  }, [props.mapLatLng]);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;
