import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Aboutcover from '../../images/about-cover.png';
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";

const About = () => {
  return (
    <section id="about" className="pt-5">
      <Container>
        <Row className="about-wrapper">
          <Col xs={{ order: '2' }} sm={{ order: '2' }} md={{ order: '1' }} lg={{ order: '1' }}>
            <img alt="" src={Aboutcover} className="about-phone" />
          </Col>
          <Col
            xs={{ order: '1' }}
            sm={{ order: '1' }}
            md={{ order: '2' }}
            lg={{ order: '2' }}
            className="aboutniche"
          >
            <div className="about-div">
              <div>
                <h3 className="title-1">About niche</h3>
              </div>
              <div>
                <div className="about-wrapper__info">
                  <p className="about-wrapper__info-text">
                  Niche is an app based fashion market place that connects unique and inspiring clothing and accessories of talented Sri Lankan designers with the fashion aspirants who love to wear exclusive and sustainable materials. Niche market place is a home for 1000+ independent brands that offer an array of products ranging from sarees, dresses, sarongs, jeans, palazzo pants, cosmetics and accessories.
                  </p>
                  <p className="about-wrapper__info-text">
                  Our exclusive collection is the one-stop shop for all men, women and kids fashion desires. Niche provides a holistic management and support to designers to develop their brands, whilst delivering a seamless online fashion experience for its customers. 
                  </p>
                </div>
              </div>
              <div>
                <p className="learnmore">
                  Learn more <BsArrowRight className="arrow" />
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;
