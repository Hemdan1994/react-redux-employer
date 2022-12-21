import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import FileUpload from './components/shared/modals/NewFileUpload';

function App() {
  return (
    <div className="App">
     <FileUpload/>
    </div>
  );
}

export default App;
