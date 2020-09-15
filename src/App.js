import React from 'react';
import './App.css';
import { RandomColor } from './components/RandomColor';

function App() {
  return (
    <div style={{ width: '50%', justifyContent: 'center' }}>
      <RandomColor></RandomColor>
    </div>
  );
}

export default App;
