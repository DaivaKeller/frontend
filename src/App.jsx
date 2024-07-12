import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home';
import Smartwatches from './smartwatches';
import Smartphones from './smartphones';
import MapComponent from './MapComponent';
import './styles.css';
const App = () => {
  return (
    <div className="split-container">
      <div className="left-pane">
        <Home />
      </div>
      <div className="right-pane">
        <Smartwatches />
      </div>
    </div>
  );
};
// src/App.js

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Navigationskarte</h1>
      </header>
      <MapComponent />
    </div>
  );
}





export default App
