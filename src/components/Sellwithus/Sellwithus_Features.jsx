import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import { GiHanger } from "@react-icons/all-files/gi/GiHanger";
import { FaAssistiveListeningSystems } from "@react-icons/all-files/fa/FaAssistiveListeningSystems";
import { GoGraph } from "@react-icons/all-files/go/GoGraph";
import { BiSupport } from "@react-icons/all-files/bi/BiSupport";
import { RiShoppingBag3Line } from "@react-icons/all-files/ri/RiShoppingBag3Line";
import { MdUpdate } from "@react-icons/all-files/md/MdUpdate";


const Sellers = () => {
    return (
      <section id="Features">
      <Container>
          <Row>
        <Row className="features-title">
        <h1>Features</h1>
        </Row>
      
        <Row className="row1">
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="panel"> 
              <h2 className="f-title">Inventory Control<GiHanger className="icon"/></h2>
              <p className="f-desc">
              Manage your store with our user friendly CMS.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="panel"> 
              <h2 className="f-title">Marketing Assistance<FaAssistiveListeningSystems className="icon"/></h2>
              <p className="f-desc">
              Hire a NICHE marketing expert to help you with everything from Campaigns to Content creating.
              </p>
            </div>
          </Col>
         
        </Row>
        <Row className="row2">
        <Col xs={12} sm={12} md={6} lg={6}>
            <div className="panel"> 
              <h2 className="f-title">Powerful Analystics<GoGraph className="icon"/></h2>
              <p className="f-desc">
              Discover all you need to know about your online store visitors by using NICHE’s ecommerce analytics and insights.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="panel"> 
              <h2 className="f-title">Dedicated Support<BiSupport className="icon"/></h2>
              <p className="f-desc">
              We are ready to help you in everything both big and small. Before and After you join Niche.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="row3">
        <Col xs={12} sm={12} md={6} lg={6}>
            <div className="panel"> 
              <h2 className="f-title">Seamless Ordering<RiShoppingBag3Line className="icon"/></h2>
              <p className="f-desc">
              Keep a track of every sale made, charge your customers credit cards safely and securely.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="panel"> 
              <h2 className="f-title">Free Updates<MdUpdate className="icon"/></h2>
              <p className="f-desc">
              We are constantly adding new features you can take advantage of to help you DELIGHT more customers.
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