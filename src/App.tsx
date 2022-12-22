import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Reverify from './components/shared/alerts/Reverify';

function App() {
  return (
    <div className="App">
     <Reverify/>
    </div>
  );
}

export default App;
