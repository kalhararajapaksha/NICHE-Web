import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';

const Contact = () => {
    return (
      <section id="contact">
      <Container>
        <Title title="Will Be Available On" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
           
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {'NICHE will soon be available on both Android PlayStore and Apple AppStore for free download. Be ready to click the download button for an ultimate Sri Lankan fshion experience'}
                </p>
                
              </div>
          </Col>
        </Row>
      </Container>
    </section>
)
}

export default Contact