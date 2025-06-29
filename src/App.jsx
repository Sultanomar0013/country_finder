import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './components/Home';
import WorldMap from './components/WorldMap/WorldMap';
import './styles/styles.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app-layout">
        <Home />
        <WorldMap />
      </div>
    </ThemeProvider>
  );
}

export default App;