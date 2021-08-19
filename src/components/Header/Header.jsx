import * as React from 'react';
import { Container,Nav,Button,Image} from 'react-bootstrap';
import { Link } from "gatsby";
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../images/download.png';

const Header = () => {
    return (
        <section id="nav">
        <Navbar  expand="lg" id="navd">
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
              <Nav.Link href="#home"><Link to="/" smooth duration={100} >Hero</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/about" smooth duration={100} >About</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/contact" smooth duration={100} >Contact us</Link></Nav.Link>
              <Nav.Link href="#link"><Button variant="danger" size="sm"><Link to="/sellwithus" smooth duration={100} className="btn-join">Join with us</Link></Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </section>
)
}

export default Header