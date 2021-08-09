import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';

const Hero = () => {
    return (
      <section id="hero">
      <Container>
        <Title title="Hero" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
           
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
)
}

export default Hero