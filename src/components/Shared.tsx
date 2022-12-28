import React from 'react'
import FileUpload from './shared/modals/NewFileUpload';
import OfferLetterModal from './shared/modals/SendingOfferLetter';
import ImportTemplate from './shared/modals/ImportTemplates';
import CandidateCard from './shared/candidateCard/CandidateCard';
import RecommendedCandidateCard from './shared/candidateCard/RecommendedCandidateCard';
import UnsuccessAlert from './shared/alerts/UnSuccess';
import VerifyMail from './shared/alerts/Verify';
import ReverifyMail from './shared/alerts/Reverify';
import SuccessAlert from './shared/alerts/Succuess';
import EmptyNotification from './shared/notification/EmptyNotification';
import PipeLineCard from './shared/pipelineCard/PipeLineCard';
import BluePopup from './shared/popupValidation/BluePopup';
import GreenPopup from './shared/popupValidation/GreenPopup';
import RedPopup from './shared/popupValidation/RedPopup';



const Shared = () => {
  return (
    <div>
      
        <FileUpload/>
        <OfferLetterModal/>
        <ImportTemplate/>

 
     <CandidateCard/>
     <RecommendedCandidateCard/>

 
     <UnsuccessAlert/>
     <VerifyMail/>
     <ReverifyMail/>
     <SuccessAlert/>



      <EmptyNotification/>

  
      <PipeLineCard/>

    
     <BluePopup/>
     <GreenPopup/>
     <RedPopup/>


    </div>
  )
}

export default Shared
