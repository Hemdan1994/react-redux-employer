import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './modals.css'
import InputGroup from 'react-bootstrap/InputGroup';


export default function ImportTemplate() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Import Templates
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header  >
            <Modal.Title className='header-import-template'>Import from jobs</Modal.Title>
          </Modal.Header>


        <Modal.Body className='p-4'>

          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><img alt='search icon' src='./images/icons/search.svg'/></InputGroup.Text>
                  <Form.Control
                    placeholder="Search active jobs"
                  className='search-input'
                  />
              </InputGroup>
            </Form.Group>


              <div className='fixed-height'>
                <Accordion >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header><h3 className='template-title'>Project Manager <br/> <span>Abu Dhabi, Full Time</span></h3> </Accordion.Header>
                    <Accordion.Body className='p-0'>
                  
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check 
                        id={`default-${type}`}
                        label={`Interview `}
                      />

                      <ul className='list-unstyled mx-3'>
                        <li>  <Form.Check id={`default-${type}`} label={`Title 1`} /> </li>
                        <li>  <Form.Check id={`default-${type}`} label={`Title 2 HR Skills`} /> </li>
                        <li>  <Form.Check id={`default-${type}`} label={`Critical Thinking`} /> </li>
                        <li>  <Form.Check id={`default-${type}`} label={`Critical Thinking`} /> </li>
                      </ul>
                    

                    
                    </div>
                  ))}
              
                    </Accordion.Body>
                  </Accordion.Item>
                  
                  <Accordion.Item eventKey="1">
                    <Accordion.Header><h3 className='template-title'>Project Manager <br/> <span>Abu Dhabi, Full Time</span></h3> </Accordion.Header>
                    <Accordion.Body className='p-0'>
                  
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check 
                        id={`default-${type}`}
                        label={`Interview `}
                      />

                      <ul className='list-unstyled mx-3'>
                        <li>  <Form.Check id={`default-${type}`} label={`Title 1`} /> </li>
                        <li>  <Form.Check id={`default-${type}`} label={`Title 2 HR Skills`} /> </li>
                        <li>  <Form.Check id={`default-${type}`} label={`Critical Thinking`} /> </li>
                        <li>  <Form.Check id={`default-${type}`} label={`Critical Thinking`} /> </li>
                      </ul>
                    

                    
                    </div>
                  ))}
              
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

          </Form>

        </Modal.Body>

        <Modal.Footer>
          <span className='link-click mx-3' onClick={handleClose} >
            Cancel
          </span>
          <button  className="addfiles-btn" onClick={handleClose}>
            Import Templates
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

