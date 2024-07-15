import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import Home from './home.jsx';
import Smartwatches from './smartwatches.jsx';
import Smartphones from './smartphones.jsx';
import Kontakten from './kontakten.jsx';
import Kontaktseite2 from './kontaktseite2.jsx';
import Garantieseite from './Garantieseite.jsx';
import Nutzungsbedingungen from './Nutzungsbedingungen.jsx';
//import NavigationsKarte from '../NavigationsKarte.jsx';
import Rückgabe from './Rückgabe.jsx';
import UnsereFiliale from './UnsereFiliale.jsx';
import Lieferung from './components/Lieferung.jsx';
import SupportServiceReparature from './components/SupportServiceReparature.jsx';



const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/smartphones" element={<Smartphones />} />
      <Route path="/smartwatches" element={<Smartwatches />} />
      <Route path="/Kontakten" element={<Kontakten />} />
      <Route path="/Kontaktseite2" element={<Kontaktseite2 />} />
      <Route path="/Garantieseite" element={<Garantieseite />} />
      <Route path="/Nutzungsbedingungen" element={<Nutzungsbedingungen />} />
      <Route path="/UnsereFiliale" element={<UnsereFiliale />} />
      {/*
      <Route path="/NavigationsKarte" element={<NavigationsKarte />} />
      */}
      <Route path="/Lieferung" element={<Lieferung/>} />
      <Route path="/Rückgabe" element={<Rückgabe/>} />
      <Route path="/SupportServiceReparature" element={<SupportServiceReparature/>} />
    </Routes> 
  </Router>
 );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);