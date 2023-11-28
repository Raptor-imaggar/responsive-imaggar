// route.js
import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/others/Header'
import Footer from './components/others/Footer';
import SubscribePopup from './components/others/SubscribePopup';
import Careers from './pages/carrers';
import Login from './pages/login';

const DesktopRoutes = () => {
  return (
    <RouterRoutes>
      <Route exact path="/" element={<>
      <Header />
      <Home /> <SubscribePopup /><Footer /></>} />
      <Route  path="/login" element={<><Header /><Login /><Footer /></>} />
      <Route  path="/Careers" element={<><Header /><Careers /><Footer /></>} />
      <Route exact path="*" element={<Home />} />
    </RouterRoutes>
  );
};

export default DesktopRoutes;
