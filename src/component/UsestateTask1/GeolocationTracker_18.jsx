import React, { useState, useEffect } from 'react';

const GeolocationTracker_18 = () => {
  const [position, setPosition] = useState({ latitude: null, longitude: null }); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleSuccess = (position) => {
      const { latitude, longitude } = position.coords; 
      setPosition({ latitude, longitude });
    };

    const handleError = (error) => {
      setError(error.message);
    };

    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(handleSuccess, handleError); 
    } else {
      setError('Geolocation is not supported by this browser.');
    }

    return () => {
      navigator.geolocation.clearWatch(handleSuccess);
    };
  }, []);

  return (
    <div className="container mt-5 text-center">
      <h2>Geolocation Tracker</h2>
      {error && <p className="text-danger">{error}</p>}
      {position.latitude && position.longitude ? (
        <div>
          <h4>Latitude: {position.latitude}</h4>
          <h4>Longitude: {position.longitude}</h4>
        </div>
      ) : (
        <p>Getting location...</p>
      )}
    </div>
  );
};

export default GeolocationTracker_18;
