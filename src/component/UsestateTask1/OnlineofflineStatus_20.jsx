import React, { useState, useEffect } from 'react';

const OnlineofflineStatus_20 = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return (
    <div className="container mt-5 text-center">
      <h2>User Online/Offline Status</h2>
      <h1 className={isOnline ? 'text-success' : 'text-danger'}>
        {isOnline ? 'Online' : 'Offline'}
      </h1>
      <p>{isOnline ? 'You are connected to the internet.' : 'You are not connected to the internet.'}</p>
    </div>
  );
};

export default OnlineofflineStatus_20;
