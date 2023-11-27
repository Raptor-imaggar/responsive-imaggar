// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoutes from './src/mobile';
import DesktopRoutes from './src/desktop';
import CustomCursor from './CustomCursor';
import Loading from './src/LoadingSpinner/LoadingSpinner';

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // State variable to control loading screen
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  useEffect(() => {
    // Simulate loading for a few seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed
  }, []);

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
      <CustomCursor />
      {isMobile ? <AppRoutes /> : <DesktopRoutes />}
      {isLoading && <Loading />}
    </BrowserRouter>
  );
};

export default App;
