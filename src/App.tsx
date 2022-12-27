import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import EmptyNotification from './components/shared/notification/EmptyNotification';

function App() {
  return (
    <div className="App">
     <EmptyNotification/>
    </div>
  );
}

export default App;
