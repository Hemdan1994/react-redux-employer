import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './notification.css';


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
            <NavDropdown title="{UserMenu}" id="basic-nav-dropdown" >
                <NavDropdown.Item header className='username'>Dr Job Pro</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Manage Jobs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">My company Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Change Password</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;