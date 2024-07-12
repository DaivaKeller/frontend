// src/MapComponent.js

import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css';

const MapComponent = () => {
  useEffect(() => {
    // Initialisiere die Karte und setze den Blickpunkt auf eine bestimmte Koordinate und Zoomstufe
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Füge eine Karte von OpenStreetMap hinzu
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Füge einen Marker an eine bestimmte Position hinzu
    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('Ein einfacher Marker.<br> Kann beliebig hinzugefügt werden.')
      .openPopup();

    // Füge ein Kreis hinzu
    L.circle([51.508, -0.11], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(map)
      .bindPopup('Ein Kreis.');

    // Füge ein Polygon hinzu
    L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
    ]).addTo(map)
      .bindPopup('Ein Polygon.');
  }, []);

  return <div id="map" />;
};

export default MapComponent;

