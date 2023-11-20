// route.js
import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/others/Header'
const DesktopRoutes = () => {
  return (
    <RouterRoutes>
      <Route exact path="/" element={<><Header /><Home /></>} />
   
      <Route exact path="*" element={<Home />} />
    </RouterRoutes>
  );
};

export default DesktopRoutes;
