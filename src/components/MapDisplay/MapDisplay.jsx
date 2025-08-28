import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 
import './MapDisplay.css';

const defaultCenter = [28.6129, 77.2295]; // Leaflet uses an array [lat, lng]

function MapDisplay({ location }) {
  const position = location ? [location.lat, location.lng] : null;

  return (
    <div className="map-container">
      <MapContainer 
        center={position || defaultCenter} 
        zoom={position ? 15 : 10} 
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {position && <Marker position={position} />}
      </MapContainer>
    </div>
  );
}

export default MapDisplay;