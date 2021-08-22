import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import HeroImg from '../../images/hero-phone.png';
import { RiSecurePaymentFill } from '@react-icons/all-files/ri/RiSecurePaymentFill';
import { BsArrowRepeat } from '@react-icons/all-files/bs/BsArrowRepeat';

const Fetures = () => {
  return (
    <section id="features" className="color-background">
      <Container>
        <Row className="about-wrapper">
          <Col
            md={6}
            sm={12}
            xs={{ order: '2' }}
            sm={{ order: '2' }}
            md={{ order: '1' }}
            lg={{ order: '1' }}
          >
            <img alt="" src={HeroImg} className="feature-image" />
          </Col>
          <Col
            md={6}
            sm={12}
            xs={{ order: '1' }}
            sm={{ order: '1' }}
            md={{ order: '2' }}
            lg={{ order: '2' }}
            className="d-flex align-items-center"
          >
            <div className="feature">
              <div className="feature-title">
                <h1 className="title-1">
                  YOUR MONEY IS SECURED <br />
                  WITH US
                </h1>
              </div>
              <div className="feature-group">
                <h3 className="feature-name">
                  <RiSecurePaymentFill className="icon" /> 
                  <span>100% Secure Checkout</span>
                </h3>
                <p className="feature-info">Protect Buyer and Security</p>
              </div>
              <div className="feature-group">
              <h3 className="feature-name">
              <BsArrowRepeat className="icon" /> 
                <span>7 Days Exchanges and Returns</span>
              </h3>
              <p className="feature-info">Terms and Conditions Apply</p>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Fetures;
