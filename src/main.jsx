import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import Home from './home.jsx';
import Smartwatches from './smartwatches.jsx';
import Smartphones from './smartphones.jsx';
import Kontakten from './kontakten.jsx';
import Kontaktseite2 from './kontaktseite2.jsx';
import Garantieseite from '../garantieseite.jsx';
import TermsOfUse from './TermsOfUse.jsx';
import NavigationsKarte from './NavigationsKarte.jsx';



const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/smartphones" element={<Smartphones />} />
      <Route path="/smartwatches" element={<Smartwatches />} />
      <Route path="/Kontakten" element={<Kontakten />} />
      <Route path="/Kontaktseite2" element={<Kontaktseite2 />} />
      <Route path="/Garantieseite" element={<Garantieseite />} />
      <Route path="/TermsOfUse" element={<TermsOfUse />} />
    </Routes> 
  </Router>
 );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);