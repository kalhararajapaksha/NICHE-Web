import * as React from 'react';
import { Container,Nav,Button,Image} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';


const Header = () => {
    return (
        <nav id="nav">
        <Navbar bg="light" expand="lg" id="navd">
        <Container>
          <Navbar.Brand href="#home" className="nav-logo"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"><Link to="about" smooth duration={100} >Hero</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="about" smooth duration={100} >About</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="contact" smooth duration={100} >Contact us</Link></Nav.Link>
              <Nav.Link href="#link"><Button variant="danger" size="sm"><Link to="projects" smooth duration={100} >Join with us</Link></Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </nav>
)
}

export default Header