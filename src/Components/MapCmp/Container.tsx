import React, { useEffect, useState, useRef } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { QuinMapContainer } from './styles';
import { lunch } from '../../Helpers/axios';

mapboxgl.accessToken =
  'pk.eyJ1IjoibmFzcmluMSIsImEiOiJja3dhZHRobmMwNGZrMnBxa3NhNGhqNWg0In0.XHR5tliIQc4YvJyDbBhXZg';

export default function MapCmp() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [mapState, setMapState] = useState({
    lng: 5.2913,
    lat: 52.1326,
    zoom: 9,
  });

  const { lat, lng, zoom } = mapState;

  const getLaunchs = () => {
    lunch.getLunchs().then((data) => {
      console.log(data);
    });
  };
  useEffect(() => {
    getLaunchs();
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return <QuinMapContainer ref={mapContainer} />;
}
