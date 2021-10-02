import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Lot from '../../images/lot1.png';
import HeroImg from '../../images/hero-phone.png';
import PlayStore from '../../images/playstore.png';
import AppStore from '../../images/appstore.svg';


const Available = () => {
    return (
      <section id="available" className="multi-bg-example">
        <Container>
          <Row className="available-wrapper">
            <Col sm={12} xs={12} md={6} lg={6} className="d-flex align-items-center">
              <div>
                <div className="app-heading">
                  <h1 className="title-1">Soon available on</h1>

                  <div className="available-wrapper__info">
                    <p className="available-wrapper__info-text">
                      {
                        'Niche app will be soon available on both Android Playstore and Apple Appstore for free download. Be the first to download and win rewards for an ultimate Sri Lankan fashion experience!'
                      }
                    </p>
                  </div>
                </div>

                <div className="store-button-group">
                  <a className="appstorebtn" href="/">
                    <img alt="" src={AppStore} />
                  </a>
                  <a className="appstorebtn pl-3" href="/">
                    <img alt="" src={PlayStore} />
                  </a>
                </div>
              </div>
            </Col>

            <Col sm={12} xs={12} md={6} lg={6}>
              <div className="available-wrapper__image">
                <img alt="" src={HeroImg} className="hero-phone" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default Available