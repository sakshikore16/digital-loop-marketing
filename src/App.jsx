import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import AboutPage from './pages/About';
import PositivusPage from './pages/Index';
import './styles/global.css';
import Services from './components/Services';
import Cases from './components/Case';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<PositivusPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cases" element={<Cases />} />
      </Routes>
    </Router>
  );
};

export default App;
