import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';

const Contactinfo = () => {
    return (
      <section id="contactinfo">
      <Container fluid>
       <div className="section-contact">
        <Row className="about-wrapper informtions">
          <Col xs={0} sm={0} md={4} lg={4}>
           
              
          </Col>
         <Col xs={12} sm={12} md={4} lg={4} >
         <Row className="contactinfo-wrapper__info headingdetails">
         <h2>Contact Info</h2>
         </Row>
         <Row className="contactinfo-wrapper__info details">
           <Col xs={6} sm={6} md={6} lg={6}> <p className="contactinfo-wrapper__info-text-l">
                  {'Nich Support:'}
                </p>
                <p className="contactinfo-wrapper__info-text-l">
                  {'Nich Vendor Support:'}
                </p>
                <p className="contactinfo-wrapper__info-text-l">
                  {'Nich Support:'}
                </p>
                </Col>
           <Col xs={6} sm={6} md={6} lg={6}>
           <p className="contactinfo-wrapper__info-text-r">
             {'support@niche.lk'}
             </p>
             <p className="contactinfo-wrapper__info-text-r">
             {'bussines@niche.lk'}
             </p>
             <p className="contactinfo-wrapper__info-text-r">
             {'+9476 728 2246'}
             </p>
           
           </Col>
         </Row>
         </Col>
         <Col xs={0} sm={0} md={4} lg={4}></Col>
          
        </Row>
        </div>
      </Container>
    </section>
)
}

export default Contactinfo