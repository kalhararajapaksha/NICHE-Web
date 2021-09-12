import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import { AiOutlineControl } from "@react-icons/all-files/ai/AiOutlineControl";
import { FaAssistiveListeningSystems } from "@react-icons/all-files/fa/FaAssistiveListeningSystems";
import { IoAnalyticsOutline } from "@react-icons/all-files/io5/IoAnalyticsOutline";
import { BiSupport } from "@react-icons/all-files/bi/BiSupport";
import { RiShoppingBag3Line } from "@react-icons/all-files/ri/RiShoppingBag3Line";
import { MdUpdate } from "@react-icons/all-files/md/MdUpdate";


const Sellers = () => {
    return (
      <section id="Features">
      <Container>
          
        <div className="text-center">
            <h1 className="title-1">Features</h1>
        </div>
      
        <Row>
          <Col lg={6}>
            <div className="panel"> 
              <h2 className="title"><AiOutlineControl className="icon"/>Inventory Control</h2>
              <p className="description">
              Manage your store with our user friendly CMS.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="panel"> 
              <h2 className="title"><FaAssistiveListeningSystems className="icon"/>Marketing Assistance</h2>
              <p className="description">
              Hire a NICHE marketing expert to help you with everything from Campaigns to Content creating.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="panel"> 
              <h2 className="title"><IoAnalyticsOutline className="icon"/>Powerful Analystics</h2>
              <p className="description">
              Discover all you need to know about your online store visitors by using NICHE’s ecommerce analytics and insights.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="panel"> 
              <h2 className="title"><BiSupport className="icon"/>Dedicated Support</h2>
              <p className="description">
              We are ready to help you in everything both big and small. Before and After you join Niche.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="panel"> 
              <h2 className="title"><RiShoppingBag3Line className="icon"/>Seamless Ordering</h2>
              <p className="description">
              Keep a track of every sale made, charge your customers credit cards safely and securely.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="panel"> 
              <h2 className="title"><MdUpdate className="icon"/>Free Updates</h2>
              <p className="description">
              We are constantly adding new features you can take advantage of to help you DELIGHT more customers.
              </p>
            </div>
          </Col>
         
        </Row>
      </Container>
    </section>
)
}

export default Sellers