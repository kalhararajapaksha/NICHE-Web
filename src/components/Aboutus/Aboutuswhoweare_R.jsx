import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Lot from '../../images/lot1.png';
import PlayStore from '../../images/playstore.png';
import AppStore from '../../images/appstore.svg';
import Co from '../../images/co-fo.png';



const Hero = () => {
    return (
      <section id="aboutus-whoweare-r" className="multi-bg-example">
      <Container fluid className="bio">
        
        <Row className="who-heading-row">
        
             <Col sm={12} md={12} lg={12}>
              <h3 className="who-heading" > Who we are</h3> 
             </Col>
        </Row>

        <Row className="bio-row">
        
             <Col sm={12} md={4} lg={4}>
               <div className="img-bio">
               <img alt="" src={Co} width="200" height="50" className="cofo-image"/>
                 </div> 
             </Col>
             <Col sm={12} md={8} lg={8} className="bio-ceo" >
              <Row className="bio-name">
               <h3>Mr.James Smith</h3>
              </Row>
              <Row className="bio-position">
              <h4>Cofounder and CEO</h4>
             </Row>
             <Row className="bio-desc">
             <p className="bio-para">Niche Is Designed To Build The Robust Relationship Between Truly Talented Sri Lankan Fashion Artists Aspiring To Build Their Own Brand And Expand It To Other Horizons.</p>
             </Row>  
             </Col>
        </Row>
              
        
      </Container>
     
    </section>
)
}

export default Hero