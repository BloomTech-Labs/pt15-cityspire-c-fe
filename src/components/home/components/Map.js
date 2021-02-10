import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import '../../../antD/styles/map.css';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map = ({ mapLatLng }) => {
  const mapContainerRef = useRef(null);
  const map = useRef();

  // On useEffect hooks, ORDER MATTERS, it must set the reference
  // to the map before accessing methods of map.
  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-104.9876, 39.7405],
      zoom: 12.5,
    });

    map.current.flyTo({
      center: mapLatLng,
    });

    map.current.on('load', () => {
      map.current.resize();
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    return () => map.current.remove();
  }, []);

  useEffect(() => {
    map.current.flyTo({
      center: mapLatLng,
    });
  }, [mapLatLng]);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;
