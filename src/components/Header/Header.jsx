import * as React from 'react';
import { Container,Nav,Button,Image} from 'react-bootstrap';
import { StaticImage } from "gatsby-plugin-image";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';


const Header = () => {
    return (
        <nav>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><StaticImage src="../images/download.png" alt="A dinosaur" layout="fixed" width={200} height={200}/></Navbar.Brand>
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