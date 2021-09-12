import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";



const Sellers = () => {
    return (
      <section id="feedback">
      <Container>
        <div className="text-center mb-5">
          <h1 className="title-1 mb-0">WHAT OUR CLIENTS SAY</h1>
          <p>Our Clients Send Us A Bunch Of Smiles And We Love Them</p>
        </div>
      
        <Row className="pt-5">
          <Col lg={4}>
            <div className="panel"> 
            <div className="c-img" />
              <h2 className="f-name">Selena Cooper</h2>
              <div className="stars mb-5">
               <AiFillStar className="staricon"/>
               <AiFillStar className="staricon"/>   
               <AiFillStar className="staricon"/>   
               <AiFillStar className="staricon"/>   
               <AiFillStar className="staricon"/>      
              </div>
              
              <p className="text-center">
                  NICHE Saved Me A Lot Of Time And Energy. Thanks To You I Have Hundreds Orders. Easy To Use And Time Efficient. Highly Recommend Anyone To Try Them, If You Want To Grow Your Business.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="panel"> 
            <div className="c-img">

            </div>
              <h2 className="f-name">James Mendes</h2>
              <div className="stars mb-5">
               <AiFillStar className="staricon"/>
               <AiFillStar className="staricon"/>   
               <AiFillStar className="staricon"/>   
               <AiFillStar className="staricon"/>   
               <AiFillStar className="staricon"/>      
              </div>
              
              <p className="text-center">
              NICHE Saved Me A Lot Of Time And Energy. Thanks To You I Have Hundreds Orders. Easy To Use And Time Efficient. Highly Recommend Anyone To Try Them, If You Want To Grow Your Business.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="panel"> 
            <div className="c-img">

            </div>
              <h2 className="f-name">Eli George</h2>
              <div className="stars mb-5">
               <AiFillStar className="staricon"/>
               <AiFillStar className="staricon"/>   
               <AiFillStar className="staricon"/>   
               <AiFillStar className="staricon"/>   
               <AiFillStar className="staricon"/>      
              </div>
              
              <p className="text-center">
              NICHE Saved Me A Lot Of Time And Energy. Thanks To You I Have Hundreds Orders. Easy To Use And Time Efficient. Highly Recommend Anyone To Try Them, If You Want To Grow Your Business.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
)
}

export default Sellers