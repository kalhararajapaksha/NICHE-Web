import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';

const Joinwithus = () => {
    return (
      <section id="joinwithus">
      <Container>
        <div className="sellwithus-div">
        <h2>Sell with us</h2>
        <Row className="joinwithus-wrapper detailsprt">
          <Col xs={12} sm={12} md={8} lg={8} >
           
              <div className="joinwithus-wrapper__info">
                <p className="joinwithus-wrapper__info-text">
                  {'Niche will help brands to create their own identity, enhance online traffic and sales. We are teaming with the best, to offer our clients and app users the most soothing online shopping experience. We invite you and your brand to join our team!'}
                </p>
               <p className="joinwithus-wrapper_info-text">
                 {'We invite you and your brand to join Our team!'}
               </p>
               <button type="button" class="sellbtn">sell with us</button>
              </div>
          </Col>
          <div></div>
          
        </Row>
        </div>
      </Container>
    </section>
)
}

export default Joinwithus