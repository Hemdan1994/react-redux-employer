    import React from 'react'
    import './pipelinecard.css'
    import  Form  from 'react-bootstrap/Form';

    const PipeLineCard = () => {
      return (
        <div className='pipeline-card'>
            <div className='card-box'>
              <div className='d-flex justify-content-between align-items-start'>
                <div>
                    {['checkbox'].map((type) => (
                    <div key={`default-${type}`} > <Form.Check  id={`default-${type}`} label={`Micheal`} />
                    <p className='job-title'>UI UX Designer, 8 yrs</p>
                     </div> ))}
                    
                </div>

                  <div className='stars-container d-flex'>
                        <img className='star-icon' src="./images/icons/stars/star.svg" alt="stars" />
                        <img className='star-icon' src="./images/icons/stars/star.svg" alt="stars" />
                        <img className='star-icon' src="./images/icons/stars/star.svg" alt="stars" />
                        <img className='star-icon' src="./images/icons/stars/star.svg" alt="stars" />
                  </div>
                </div>
              </div>
              <div className='d-flex justify-content-between align-items-center  access-box'>
                <span className='time-left'><img alt='time' src='./images/icons/pipeline/time.svg'/> 10 Days Ago</span>
                <div className='d-flex align-items-center'>
                  <p className='reject'><img src="./images/icons/pipeline/reject.svg" alt="rejection" />   Reject</p>
                  <img src="./images/icons/pipeline/dots.svg" alt="dots" />
                </div>
              </div>
         
          
        </div>
      )
    }
    
    export default PipeLineCard
    