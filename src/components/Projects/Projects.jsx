import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';

const Projects = () => {
    return (
      <section id="projects">
      <Container>
        <Title title="Sell with Niche" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
           
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {'Niche helps brands to create their own identity, boost sales and manage their unique online fashion store. Teamed with best, Niche offers its app users the seamless online shopping experience. A world of fashion aficionados await to see your brand'}
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