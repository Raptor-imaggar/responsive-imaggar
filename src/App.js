// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './src/mobile';
import DesktopRoutes from './src/desktop';
import CustomCursor from './CustomCursor';
import Loading from './src/LoadingSpinner/LoadingSpinner';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 767px)').matches ||
      window.location.search.includes('forceMobileView')
  );

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
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
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
