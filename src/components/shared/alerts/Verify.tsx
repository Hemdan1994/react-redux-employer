import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import './alert.css';

function VerifyMail() {
  const [show, setShow] = useState(false);

  return (
    <Container>
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} className='success_custom' delay={5000} autohide>
          <Toast.Header>
          <div>
            <img src='./images/icons/toast-message/email-verfied.svg' className='mb-2' alt='email verifyed'/>
          
            <p className='mb-2'>Your email id is verified. Now you can have the benefits as other verified employers are getting</p>
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

export default VerifyMail;