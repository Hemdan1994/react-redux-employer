import React from 'react'
import './candidatecard.css'

const RecommendedCandidateCard = () => {
  return (
    <div className='recomended-candidate-box'>
      <div className='d-flex justify-content-between align-items-start'>
        <div className='recomended-details'>
          <span className='matching-jobs'>6 out of 15 skills are matching.</span>
          <h2 className='recomended-candidate-name'>Monkey D Luffy</h2>
          <p className='recomended-candidate-title'>UI UX Designer, <img alt='experience' src='./images/icons/bag.svg'/> <span className='recomended-candidate-title'>5 yrs 6 months</span></p>

          <h5 className='title'>Current Company</h5>
          <p className='desc'>Dream Solutions</p>

          <h5 className='title'>Skills</h5>
          <p className='desc'>Access Control System, Access Control</p>

          <span className='read-more'>+4more</span>

        </div>

        <img alt='Candidate profile img' src='./images/icons/image.png'/>
      </div>

      <div className='d-flex align-items-center mt-3'>
        <button className='view-profile'>View Profile</button>
        <span className='save'> <img alt='Save icon' src='./images/icons/save-icon.svg'/> Save </span>
      </div>
    </div>
  )
}

export default RecommendedCandidateCard
