import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './notification.css';
import { Dropdown } from 'react-bootstrap';

function EmptyNotification() {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            
          </Nav>
          <Nav className='ms-auto'>
          <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className='e-caret-hide' >
                    <img src='./images/icons/notifications/email.svg' alt="" width='16px' height='16px' />
                </Dropdown.Toggle>

                <Dropdown.Menu align="end" className='icon_notification empty' >
                    <Dropdown.Item>
                        <div className='empty_notification text-center'>
                            <div className='mb-2 '><img src='./images/icons/notifications/icon.svg' alt="" width='32px' height='32px' /></div>
                            <div className='notify_text'>
                                <p>There are no notifications as for now.<br/>Try after some time.</p>
                            </div>
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className='e-caret-hide' >
                    <img src='./images/icons/notifications/notification.svg' alt="" width='16px' height='16px' />
                </Dropdown.Toggle>

                <Dropdown.Menu align="end" className='icon_notification empty' >
                    <Dropdown.Item>
                        <div className='empty_notification text-center'>
                            <div className='mb-2 '><img src='./images/icons/notifications/icon.svg' alt="" width='32px' height='32px' /></div>
                            <div className='notify_text'>
                                <p>There are no email notifications as for now.<br/>Try after some time.</p>
                            </div>
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default EmptyNotification;
