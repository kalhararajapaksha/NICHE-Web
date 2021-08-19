import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";



const Sellers = () => {
    return (
      <section id="feedback">
      <Container>
          <Row>
        <Row className="feedback-title">
        <h1>WHAT OUR CLIENTS SAY</h1>
        <h2>Our Clients Send Us A Bunch Of Smiles And We Love Them</h2>
        </Row>
      
        <Row className="row1">
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="panel"> 
            <div className="c-img">

            </div>
              <h2 className="f-name">Selena Cooper</h2>
              <div className="stars">
               <AiFillStar className="staricon"/>
               <AiFillStar className="staricon"/>   
               <AiFillStar className="staricon"/>   
               <AiFillStar className="staricon"/>   
               <AiFillStar className="staricon"/>      
              </div>
              
              <p className="f-desc">
              NICHE Saved Me A Lot Of Time And Energy. Thanks To You I Have Hundreds Orders. Easy To Use And Time Efficient. Highly Recommend Anyone To Try Them, If You Want To Grow Your Business.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="panel"> 
            <div className="c-img">

            </div>
              <h2 className="f-name">James Mendes</h2>
              <div className="stars">
               <AiFillStar className="staricon"/>
               <AiFillStar className="staricon"/>   
               <AiFillStar className="staricon"/>   
               <AiFillStar className="staricon"/>   
               <AiFillStar className="staricon"/>      
              </div>
              
              <p className="f-desc">
              NICHE Saved Me A Lot Of Time And Energy. Thanks To You I Have Hundreds Orders. Easy To Use And Time Efficient. Highly Recommend Anyone To Try Them, If You Want To Grow Your Business.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="panel"> 
            <div className="c-img">

            </div>
              <h2 className="f-name">Eli George</h2>
              <div className="stars">
               <AiFillStar className="staricon"/>
               <AiFillStar className="staricon"/>   
               <AiFillStar className="staricon"/>   
               <AiFillStar className="staricon"/>   
               <AiFillStar className="staricon"/>      
              </div>
              
              <p className="f-desc">
              NICHE Saved Me A Lot Of Time And Energy. Thanks To You I Have Hundreds Orders. Easy To Use And Time Efficient. Highly Recommend Anyone To Try Them, If You Want To Grow Your Business.
              </p>
            </div>
          </Col>
         
        </Row>
        
        
        </Row>
      </Container>
    </section>
)
}

export default Sellers