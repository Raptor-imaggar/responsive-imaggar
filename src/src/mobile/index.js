// route.js
import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Home from './pages/home';

const AppRoutes = () => {
  return (
    <RouterRoutes>
      <Route exact path="/" element={<Home />} />
   
      <Route exact path="*" element={<Home />} />
    </RouterRoutes>
  );
};

export default AppRoutes;
