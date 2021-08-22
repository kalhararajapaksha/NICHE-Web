import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Lot from '../../images/flower.png';
import HeroImg from '../../images/hero-phone.png';
import PlayStore from '../../images/playstore.png';
import AppStore from '../../images/appstore.svg';
import { Link } from '@reach/router'




const Hero = () => {
    return (
      <section id="hero" className="multi-bg-example">
        <Container>
          <Row className="hero-wrapper">
            <img alt="" src={Lot} width="50" height="50" className="bg-img" />
            <Col xs={12} sm={12} md={6} lg={6} className="d-flex align-items-center">
              <Row className="hero-heading">
                <h1>
                  Be Exclusive, Be <br /> Divine, Be Yourself{' '}
                </h1>
                <div className="hero-wrapper__info">
                  <p className="hero-wrapper__info-text">
                    {
                      'Niche brings you the ultimate Sri Lankan Fashion experience at your fingertips. It is time for you to shine and show the true Sri Lankan in you !'
                    }
                  </p>
                </div>
                <div className="store-button-group">
                  <a className="appstorebtn" href="/">
                    <img alt="" src={AppStore} />
                  </a>
                  <a className="appstorebtn pl-3" href="/">
                    <img alt="" src={PlayStore} />
                  </a>
                </div>
              </Row>
            </Col>

            <Col xs={12} sm={12} md={6} lg={6} className="col-hero-wrapper__image">
              <div className="hero-wrapper__image">
                <img alt="" src={HeroImg} className="hero-phone" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default Hero