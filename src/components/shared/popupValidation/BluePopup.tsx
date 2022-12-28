import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './popup.css';

function BluePopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Blue popup
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      
      >
        <Modal.Header closeButton>
          <Modal.Title>Default Validation Pop-Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Default validation popup message will be shown here. This is a sample.
        </Modal.Body>
        <Modal.Footer className='bg-blue'>
          <span className='close-link' onClick={handleClose}>close</span>
          <button className='blue-btn' onClick={handleClose}>Action</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BluePopup
