import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import './alert.css';

function ReverifyMail() {
  const [show, setShow] = useState(false);

  return (
    <Container>
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} className='danger_custom' delay={5000} autohide>
          <Toast.Header>
          <div>
            <img src='./images/icons/toast-message/not_verified.svg' className='mb-2'/>
          
            <p className='mb-2'>Your email id is not verified yet. Verify your id to get the benefits which are provided to the other verified employers.</p>
            <a href='#'>Verify Email</a>
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

export default ReverifyMail;