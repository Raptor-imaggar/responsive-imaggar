// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoutes from './src/mobile';
import DesktopRoutes from './src/desktop';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 767px)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addListener(handleMediaQueryChange);

    // Initial check for screen size
    setIsMobile(mediaQuery.matches);

    return () => {
      // Clean up the listener on unmount
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <BrowserRouter>
  
       ({isMobile ? <AppRoutes /> : <DesktopRoutes />})

    </BrowserRouter>
  );
};

export default App;
