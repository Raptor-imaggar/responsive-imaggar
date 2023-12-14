// route.js
import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/others/Header'
import Footer from './components/others/Footer';
import SubscribePopup from './components/others/SubscribePopup';
import Careers from './pages/carrers';
import Login from './pages/login';
import Contact from './pages/contact';
import ProSer from './pages/ProSer';
import SubProSer from './pages/SubProSer';

const DesktopRoutes = () => {
  return (
    <RouterRoutes>
      <Route exact path="/" element={<>
      <Header />
      <Home /> <SubscribePopup /><Footer /></>} />
      <Route  path="/login" element={<Login />} />
      
      <Route  path="/Careers" element={<><Header /><Careers /><Footer /></>} />
      <Route  path="/contact" element={<><Header /><Contact /><Footer /></>} />
      <Route  path="/products" element={<><Header /><ProSer /><Footer /></>} />
      <Route  path="/sub" element={<><Header /><SubProSer /><Footer /></>} />
      <Route exact path="*" element={<Home />} />
    </RouterRoutes>
  );
};

export default DesktopRoutes;
