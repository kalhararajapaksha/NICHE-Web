import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';

const Joinwithus = () => {
    return (
      <section id="joinwithus">
      <Container>
        <Title title="Sell With Us" />
        <Row className="about-wrapper detailsprt">
          <Col md={6} sm={12}>
           
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {'Niche will help brands to create their own identity, enhance online traffic and sales. We are teaming with the best, to offer our clients and app users the most soothing online shopping experience. We invite you and your brand to join our team!'}
                </p>
               <p className="about-wrapper_info-text">
                 {'We invite you and your brand to join Our team!'}
               </p>
               <button type="button" class="btn btn-danger">sell with us</button>
              </div>
          </Col>
          <div></div>
          
        </Row>
      </Container>
    </section>
)
}

export default Joinwithus