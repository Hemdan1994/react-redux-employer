import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './popup.css';

function GreenPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Green popup
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>You’re about to move the candidate to the <span className='green-text'>Offer Made</span> stage?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        The applicants will be moved to the offer made list and you can send a offer letter on your behalf or the “ company “ behalf to them and they will no longer move back to any other stage once offered is made.
        </Modal.Body>
        <Modal.Footer className='bg-green'>
          <span className='close-link' onClick={handleClose}>close</span>
          <button className='green-btn' onClick={handleClose}>Ok, Move & Send Offer !</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GreenPopup
