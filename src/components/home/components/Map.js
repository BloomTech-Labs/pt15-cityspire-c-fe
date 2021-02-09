import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import '../../../antD/styles/map.css';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map = ({ mapLatLng }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-104.9876, 39.7405],
      zoom: 12.5,
    });

    map.on('load', () => {
      map.resize();
    });

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    map.flyTo({
      center: mapLatLng,
    });

    return () => map.remove();
  }, [mapLatLng]);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;
