import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Lot from '../../images/lot1.png';
import HeroImg from '../../images/hero-phone.png';
import PlayStore from '../../images/playstore.png';
import AppStore from '../../images/appstore.svg';
import { StaticImage } from 'gatsby-plugin-image';


const Hero = () => {
    return (
      <section id="sellwithusinfo" className="multi-bg-example">
          <Container fluid className="whatwedo">
               <h3 className="text-center title-1" >SELL WITH US</h3> 
               <Row className="d-flex justify-content-center text-center">
                    <Col lg="8">
                         <p className="whatwedo-para">
                         Niche is a Sri Lankan owned e-commerce platform whose goal is to create a competitive market for Sri Lanka's own incredible designers. Niche will be Sri Lanka’s largest online fashion store. NIche will comprise all leading home-grown fashion brands which will go above and beyond to satisfy our customers. Niche is available in both the Android PlayStore and Apple AppStore for free download. Brands will have access to in-app features such as online stock control, online revenue report generating, promo code generator and many more wonderful features. Niche will help brands to create their own identity,enhance online traffic and sales. Brands will also get access to our user-friendly back end login. We are teaming with the best, to offer our clients and app users the most soothing online shopping experience. A nation leading online payment gateway, PayHere will secure all our online transactions. Niche will monitor brands and customer reviews constantly to maintain the high standards of the platform. This will also help us to improve our services in future. Our technical team, IConn I/O will be powering Niche and will provide constant technical support and upgrades. 
                         </p>
                         <p className="whatwedo-para-bold">
                         <strong>We invite you and your brand to join our team!</strong>
                         </p>
                    </Col>
               </Row>  
          </Container>
     </section>
)
}

export default Hero