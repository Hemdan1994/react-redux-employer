import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import './talentpool.css';

function TalentPool() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className={`checkbox ${isChecked ? "checkbox--active" : ""} talent-check`}>
      <input type="checkbox" onChange={() => {setIsChecked(!isChecked); }} />
        <div className='talentpool_box d-flex'>
            <div className='prof_pic'><img src="./images/icons/users/img.svg" /></div>
            <div className='tp_details'>
              <h3>Abhishek Yadav</h3>
              <p>UI UX Designer</p>
              <p className='time'>a min ago</p>
            </div>
        </div>
    </label>
  );
}
export default TalentPool
