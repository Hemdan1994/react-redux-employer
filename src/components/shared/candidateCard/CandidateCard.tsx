import React from 'react'
import './candidatecard.css'

const CandidateCard = () => {
  return (
    <div className='card-box'>
      <div className='d-flex justify-content-between'>

        <div className='d-flex align-items-center'>
          <img className='cadidate-img align-self-start' alt='Candidate card DrJobs' src='./images/icons/users/user-girl.svg'/>
          <div className='mx-2'>
            <h3 className='candidate-name'>Hannah Montana</h3>
            <span className='candidate-title'>Business Executive, 4 yrs</span>

            <p className='m-0 mt-2 marked'>Sourced</p>
          </div>
        </div>
        <div className='d-flex flex-column justify-content-between'>
        <span className='menu-setting'><img alt='Open menu' src='./images/icons/menu.svg'/></span>
        <span className='menu-setting'><img alt='Open menu' src='./images/icons/save-icon.svg'/></span>

        </div>
      </div>

      
    </div>
  )
}

export default CandidateCard
