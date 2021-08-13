import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';

const Contactinfo = () => {
    return (
      <section id="contactinfo">
      <Container>
       
        <Row className="about-wrapper informtions">
          <Col md={4} >
           
              
          </Col>
         <Col md={4} >
         <Row className="contactinfo-wrapper__info headingdetails">
         <Title title="Contact info" />
         </Row>
         <Row className="contactinfo-wrapper__info details">
           <Col> <p className="contactinfo-wrapper__info-text">
                  {'Nich Support:'}
                </p>
                <p className="contactinfo-wrapper__info-text">
                  {'Nich Vendor Support:'}
                </p>
                <p className="contactinfo-wrapper__info-text">
                  {'Nich Support:'}
                </p>
                </Col>
           <Col><p className="contactinfo-wrapper__info-text">
             {'support@niche.lk'}
             </p>
             <p className="contactinfo-wrapper__info-text">
             {'bussines@niche.lk'}
             </p>
             <p className="contactinfo-wrapper__info-text">
             {'+9476 728 2246'}
             </p>
           
           </Col>
         </Row>
         </Col>
         <Col md={4}></Col>
          
        </Row>
      </Container>
    </section>
)
}

export default Contactinfo