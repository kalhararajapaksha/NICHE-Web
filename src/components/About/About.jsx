import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Aboutcover from '../../images/about-cover.png';
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row className="about-wrapper">
          <Col xs={{ order: '2' }} sm={{ order: '2' }} md={{ order: '1' }} lg={{ order: '1' }}>
            <img alt="" src={Aboutcover} className="hero-phone" />
          </Col>
          <Col
            xs={{ order: '1' }}
            sm={{ order: '1' }}
            md={{ order: '2' }}
            lg={{ order: '2' }}
            className="aboutniche"
          >
            <div className="about-div">
            <Row>
              <h3>About niche</h3>
            </Row>
            <Row>
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  NICHE delivers a stylish and trending collection of men and women apparel,sourced
                  from Sri Lanka own fashion labels and reputed Sri Lankan fashion icons.NICHE
                  provides you with everything from sarees to dresses, sarongs to jeans, Cosmetics
                  and accessories.
                </p>
                <p className="about-wrapper__info-text">
                  Our incredible collection of products has something for everyone. With the
                  availability of an ultra-modern collection of clothing and accessories online,
                  NICHE is your one-stop shop for your wardrobe essentials
                </p>
              </div>
            </Row>
            <Row>
              <p className="learnmore">Learn more <BsArrowRight className="arrow"/></p>
            </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;
