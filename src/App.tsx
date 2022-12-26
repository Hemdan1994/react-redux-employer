import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import FileUpload from './components/shared/modals/NewFileUpload';
import OfferLetterModal from './components/shared/modals/SendingOfferLetter';
import ImportTemplate from './components/shared/modals/ImportTemplates';

function App() {
  return (
    <div className="App">
     <FileUpload/>
     <OfferLetterModal/>
     <ImportTemplate/>
    </div>
  );
}

export default App;
