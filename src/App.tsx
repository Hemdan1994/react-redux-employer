import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import UnsuccessAlert from './components/shared/alerts/UnSuccess';


function App() {
  return (
    <div className="App">
      <UnsuccessAlert/>
    </div>
  );
}

export default App;
