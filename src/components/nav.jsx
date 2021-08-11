import * as React from 'react';
import { Container,Nav,Button,Image} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'gatsby'
import Logo from '../../images/download.png';

const Header = () => {
    return (
        <section id="nav">
        <Navbar bg="light" expand="lg" id="navd">
        <Container>
          <Navbar.Brand href="#home" className="nav-logo">
            <img
          alt=""
          src={Logo}
          width="50"
          height="50"
          className="d-inline-block align-top"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"><Link to="about" >Hero</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="about" >About</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="contact" >Contact us</Link></Nav.Link>
              <Nav.Link href="#link"><Button variant="danger" size="sm"><Link to="projects" smooth duration={100} >Join with us</Link></Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </section>
)
}

export default Header