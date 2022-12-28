import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Shared from './components/Shared';
// import PipeLineCard from './components/shared/pipelineCard/PipeLineCard';
// import FileUpload from './components/shared/modals/NewFileUpload';
// import OfferLetterModal from './components/shared/modals/SendingOfferLetter';
// import ImportTemplate from './components/shared/modals/ImportTemplates';
// import UnsuccessAlert from './components/shared/alerts/UnSuccess';
// import RecommendedCandidateCard from './components/shared/candidateCard/RecommendedCandidateCard';
// import CandidateCard from './components/shared/candidateCard/CandidateCard';
// import VerifyMail from './components/shared/alerts/Verify';
// import ReverifyMail from './components/shared/alerts/Reverify';
// import SuccessAlert from './components/shared/alerts/Succuess';
// import BluePopup from './components/shared/popupValidation/BluePopup';
// import GreenPopup from './components/shared/popupValidation/GreenPopup';
// import RedPopup from './components/shared/popupValidation/RedPopup';


   

function App() {
  return (
    <div >

      <h2> welcome to DrJobs ... to show shared components type in url /sharedComponents</h2>
      <BrowserRouter>
        <Routes>
          <Route path='/sharedComponents' element={<Shared/>}/>
        </Routes>
      </BrowserRouter>
      {/* Modals */}
        {/* <FileUpload/>
        <OfferLetterModal/>
        <ImportTemplate/> */}

     {/* Card */}
     {/* <CandidateCard/> */}
     {/* <RecommendedCandidateCard/> */}

     {/* Alerts */}
     {/* <UnsuccessAlert/>
     <VerifyMail/>
     <ReverifyMail/>
     <SuccessAlert/> */}


     {/* Notifications */}
      {/* <EmptyNotification/> */}

      {/* PipeLine Card */}
      {/* <PipeLineCard/> */}

     {/* Popup validation */}
     {/* <BluePopup/> */}
     {/* <GreenPopup/> */}
     {/* <RedPopup/> */}


    </div>
  );
}

export default App;
