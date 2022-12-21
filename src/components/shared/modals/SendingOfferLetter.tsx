import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function OfferLetterModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

