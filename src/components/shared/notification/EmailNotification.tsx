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
                    <img src='./images/icons/notifications/notification.svg' width='16px' height='16px' />
                </Dropdown.Toggle>

                <Dropdown.Menu align="end" className='icon_notification' >
                    <Dropdown.Item href="#">
                        <div className='d-flex'>
                            <div><img src='./images/icons/notifications/icon_following.svg' width='16px' height='16px' /></div>
                            <div>
                                <b>User started following you</b>
                                <p>Luffy started following you employer na…</p>
                            </div>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#action/3.2">Manage Jobs</Dropdown.Item>
                    <Dropdown.Item href="#action/3.3">My company Profile</Dropdown.Item>
                    <Dropdown.Item href="#action/3.4">Change Password</Dropdown.Item>
                    <Dropdown.Item href="#action/3.4">Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className='e-caret-hide' >
                    <img src='./images/icons/notifications/icon_account.svg' width='16px' height='16px' />
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