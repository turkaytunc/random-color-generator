import React from 'react';
import './App.scss';
import { RandomColorCard } from './components/RandomColorCard';

function App() {
  return (
    <div className="app">
      <div className="app-card-wrapper">
        <RandomColorCard></RandomColorCard>
      </div>
    </div>
  );
}

export default App;
