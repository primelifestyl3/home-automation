import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import Home from 'pages/Home';
import Services from 'pages/Services';

import 'App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
