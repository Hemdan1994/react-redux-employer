import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './notification.css';
import { Dropdown } from 'react-bootstrap';

function NavigationBar() {

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
                    <span className='indicate'></span>
                </Dropdown.Toggle>

                <Dropdown.Menu align="end" className='icon_notification' >
                    <Dropdown.Item href="#">
                        <div className='d-flex notify_content'>
                            <div className='me-2 d-flex'><img src='./images/icons/users/img.svg' alt="" width='32px' height='32px' /></div>
                            <div className='notify_text'>
                                <b>Abhishek Yadav</b>
                                <p>UI UX Designer</p>
                            </div>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <div className='d-flex notify_content'>
                            <div className='me-2 d-flex'><img src='./images/icons/users/img-1.svg' alt="" width='32px' height='32px' /></div>
                            <div className='notify_text'>
                                <b>Monkey D Luffy</b>
                                <p>UI UX Designer</p>
                            </div>
                        </div></Dropdown.Item>
                    <Dropdown.Item href="#action/3.3">
                        <div className='d-flex notify_content'>
                            <div className='me-2 d-flex'><img src='./images/icons/users/img-2.svg' alt="" width='32px' height='32px' /></div>
                            <div className='notify_text'>
                                <b>Zoro Pirate Hunter</b>
                                <p>UI Developer</p>
                            </div>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#action/3.4">
                        <div className='d-flex notify_content'>
                            <div className='me-2 d-flex'><img src='./images/icons/users/img-3.svg' alt="" width='32px' height='32px' /></div>
                            <div className='notify_text'>
                                <b>Mark H</b>
                                <p>Business Executive</p>
                            </div>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#action/3.4">
                        <div className='text-center'>
                            <div className='notify_text'>
                                Go to Emails
                            </div>
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className='e-caret-hide' >
                    <img src='./images/icons/notifications/notification.svg' alt="" width='16px' height='16px' />
                    <span className='indicate blue'></span>
                </Dropdown.Toggle>

                <Dropdown.Menu align="end" className='icon_notification' >
                    <Dropdown.Item href="#">
                        <div className='d-flex notify_content'>
                            <div className='me-2 d-flex'><img src='./images/icons/notifications/icon_following.svg' alt="" width='16px' height='16px' /></div>
                            <div className='notify_text'>
                                <b>User started following you </b>
                                <p>Luffy started following you employer na…</p>
                            </div>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <div className='d-flex notify_content'>
                            <div className='me-2 d-flex'><img src='./images/icons/notifications/icon_new_user.svg' alt="" width='16px' height='16px' /></div>
                            <div className='notify_text'>
                                <b>New User Added</b>
                                <p>New user “ Mark ” is added in sourced.</p>
                            </div>
                        </div></Dropdown.Item>
                    <Dropdown.Item href="#action/3.3">
                        <div className='d-flex notify_content'>
                            <div className='me-2 d-flex'><img src='./images/icons/notifications/icon_new_application.svg' alt="" width='16px' height='16px' /></div>
                            <div className='notify_text'>
                                <b>New Application</b>
                                <p>Abhishek applied for UI UX Designer.</p>
                            </div>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#action/3.4">
                        <div className='d-flex notify_content'>
                            <div className='me-2 d-flex'><img src='./images/icons/notifications/icon_chat.svg' alt="" width='16px' height='16px' /></div>
                            <div className='notify_text'>
                                <b>Chat Message</b>
                                <p>Mark wants to start chat with you.</p>
                            </div>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#action/3.4">
                        <div className='text-center'>
                            <div className='notify_text'>
                                Mark all as read
                            </div>
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className='e-caret-hide' >
                    <img src='./images/icons/notifications/icon_account.svg' alt="" width='16px' height='16px' />
                </Dropdown.Toggle>

                <Dropdown.Menu align="end" >
                    <Dropdown.Item header className='username'>Dr Job Pro</Dropdown.Item>
                    <Dropdown.Item href="#action/3.2">Manage Jobs</Dropdown.Item>
                    <Dropdown.Item href="#action/3.3">My company Profile</Dropdown.Item>
                    <Dropdown.Item href="#action/3.4">Change Password</Dropdown.Item>
                    <Dropdown.Item href="#action/3.4">Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;