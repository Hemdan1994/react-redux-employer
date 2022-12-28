import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './popup.css';

function RedPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Red popup
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      
      >
        <Modal.Header closeButton>
          <Modal.Title>You’re about to reject the candidate ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        The applicants will be moved to the rejected list and will be no longer the part for this position.
        </Modal.Body>
        <Modal.Footer className='bg-red'>
          <span className='close-link' onClick={handleClose}>close</span>
          <button className='red-btn' onClick={handleClose}>Action</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RedPopup
