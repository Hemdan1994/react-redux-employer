import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import './alert.css';

function UnsuccessAlert() {
  const [show, setShow] = useState(false);

  return (
    <Container>
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} bg="danger">
          <Toast.Header>
          <div className='me-3'>
            <img alt='toast message' src='./images/icons/toast-message/tick-red.svg' className='mr-3'/>
          </div>
          <div>
            <h5 className="me-auto">Unsuccessful</h5>
            <p>There was an error while processing.</p>
          </div>
            
          </Toast.Header>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button onClick={() => setShow(true)}>Show Toast</Button>
      </Col>
    </Row>
    </Container>
  );
}

export default UnsuccessAlert;