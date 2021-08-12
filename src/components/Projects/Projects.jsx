import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';

const Projects = () => {
    return (
      <section id="projects">
      <Container>
        <Title title="Sell With Us" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
           
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {'NICHE will help brands to create their own identity, enhance online traffic and sales. We are teaming with the best, to offer our clients and app users the most soothing shopping experience'}
                </p>
               
              </div>
          </Col>
          <div></div>
          
        </Row>
      </Container>
    </section>
)
}

export default Projects