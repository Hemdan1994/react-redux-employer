import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './modals.css'


export default function FileUpload() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        File Upload
      </Button>

      <Modal show={show} onHide={handleClose}>
       
        <Modal.Body className='p-4'>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='label-form-modal'>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title goes here"
                className='input-form-modal'
              />
            </Form.Group>


            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className='label-form-modal'>Description</Form.Label>
              <Form.Control placeholder='Write a description' as="textarea" rows={3}   className='textarea-form-modal'/>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label className='label-form-modal'>File Attached</Form.Label>
                <div className='d-flex justify-content-center upload-box align-items-center'>
                    <h3 className='upload-box-label'>
                    Drop a file or  <label className="button-link" htmlFor="upload">Click here</label>
                    <input id="upload" type="file"/> to upload it.
                    </h3>
                </div>
            </Form.Group>

            <div className='mb-1 uploaded-files-box d-flex justify-content-between align-items-center'>
                <div className='d-flex '>
                    <img alt='upload resume drjobs pro' src="./images/icons/file_popup/doc-svgrepo-com.svg" />
                    <div className='d-flex flex-column mx-2 align-items-start justify-content-center' style={{width:"100%"}}>
                        <span className='file-info'>Filename.docz</span>
                        <span className='file-info'>245KB</span>
                    </div>
                </div>
                <img alt='remove CV drjobs' src="./images/icons/file_popup/delete-svgrepo-com.svg"/>
            </div>

            <div className='mb-1 uploaded-files-box d-flex justify-content-between align-items-center' >
            <div className='d-flex ' style={{width:"100%"}}>
                <img alt='upload resume drjobs pro' src="./images/icons/file_popup/pdf-svgrepo-com.svg" />
                <div className='d-flex flex-column mx-2 align-items-start justify-content-center'style={{width:"100%"}}>
                    <span className='file-info'>Filename.docz</span>
                    <ProgressBar now={88} style={{width:"100%"}}/>
                    <span className='file-info'>88%</span>
                </div>
            </div>
            <img alt='remove CV drjobs' src="./images/icons/file_popup/delete-svgrepo-com.svg"/>
        </div>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <span className='link-click mx-3' onClick={handleClose} >
            Cancel
          </span>
          <button  className="addfiles-btn" onClick={handleClose}>
            Add Files
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

