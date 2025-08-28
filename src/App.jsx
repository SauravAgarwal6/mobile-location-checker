import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import MapDisplay from './components/MapDisplay/MapDisplay';
import './App.css';

const baseLocation = {
  lat: 28.6129,
  lng: 77.2295
};

function App() {
  const [number, setNumber] = useState('');
  const [location, setLocation] = useState(null);

  const handleSearch = () => {
    // Validation Check 1: Is the input empty?
    if (number.trim() === '') {
      alert("Please enter a phone number.");
      return;
    }
    // Validation Check 2: Is the number at least 10 digits long?
    if (number.length < 10) {
      alert("Please enter a valid 10-digit phone number.");
      return; // Stop the function here
    }

    // If both checks pass, then proceed with the search
    const latOffset = (Math.random() - 0.5) * 0.02;
    const lngOffset = (Math.random() - 0.5) * 0.02;

    const randomizedLocation = {
      lat: baseLocation.lat + latOffset,
      lng: baseLocation.lng + lngOffset,
    };
    
    setLocation(randomizedLocation);
  };

  return (
    <div className="container">
      <h1>Mobile Location Checker</h1>
      <p>Enter a phone number to find its mock location.</p>
      
      <SearchBar 
        number={number} 
        setNumber={setNumber} 
        onSearch={handleSearch} 
      />
      
      <MapDisplay 
        location={location} 
      />
    </div>
  );
}

export default App;