import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import EmailNotification from './components/shared/notification/EmailNotification';

function App() {
  return (
    <div className="App">
     <EmailNotification/>
    </div>
  );
}

export default App;
