// Bootstrap Imports
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

// Material UI Imports
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// Draf JS Imports
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

export default function OfferLetterModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );


  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Send Offer Letter
      </Button>

      <Modal className='custom-p'  size="lg" show={show} onHide={handleClose}>
        <Modal.Header className='p-0 pb-16' closeButton>
          <Modal.Title className='header-offer-letter'>Send Offer Letter to <span>“ Abhishek Yadav ”</span></Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-0 '>
          <div className='d-flex justify-content-between py-3'>
            <div className='sender'>
              <h4 className='sender-title'>From</h4>
              <p className='sender-info'>Employer Name  <span>( employer.id@domain.com )</span></p>
            </div>

            <div className='sender'>
              <h4 className='sender-title'>To</h4>
              <p className='sender-info'>Candidate Name  <span>( candidate.in@domain.com )</span></p>
            </div>
          </div>

          

          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='label-form-modal'>Event title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title goes here"
                className='input-form-modal'
              />
            </Form.Group>


            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='label-form-modal'>Template</Form.Label>
           
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
              
              </FormControl>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

              <Form.Label className='label-form-modal'>Message</Form.Label>
              <Editor editorState={editorState} onChange={setEditorState} />

            </Form.Group>



          </Form>
        </Modal.Body>
        <Modal.Footer className='border-top-0 d-flex justify-content-between p-0' >
          <label className="button-link attach" htmlFor="upload"><img className='my-2'  alt='attach file' src='./images/icons/attach.svg'/>Attach file</label>
                    <input id="upload" type="file"/> 
          <div>
        
          <button className="addfiles-btn small-pad" onClick={handleClose}>
            Send Email
          </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

