import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';

const Contactinfo = () => {
    return (
      <section id="contactinfo">
      <Container>
        <Title title="Contact info" />
        <Row className="about-wrapper informtions">
          <Col md={6} sm={12}>
           
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {'Nich Support'}
                </p>

                <p className="about-wrapper__info-text">
                  {'Nich Vendor Support'}
                </p>

                <p className="about-wrapper__info-text">
                  {'Nich Support'}
                </p>
               
              </div>
          </Col>
          <div></div>
          
        </Row>
      </Container>
    </section>
)
}

export default Contactinfo