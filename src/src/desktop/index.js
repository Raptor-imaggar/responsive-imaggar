// route.js
import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/others/Header'
import Footer from './components/others/Footer';
import Careers from './pages/carrers';
const DesktopRoutes = () => {
  return (
    <RouterRoutes>
      <Route exact path="/" element={<>
      <Header />
      <Home /><Footer /></>} />
      <Route  path="/Careers" element={<><Header /><Careers /><Footer /></>} />
      <Route exact path="*" element={<Home />} />
    </RouterRoutes>
  );
};

export default DesktopRoutes;
