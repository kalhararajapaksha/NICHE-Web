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
      <section id="aboutus-whatwedo" className="multi-bg-example">
      <Container fluid className="whatwedo">
        <div className="section-div">
        <Row className="what-heading-row">
        
             <Col sm={12} md={12} lg={12}>
              <h3 className="what-heading" > What we do</h3> 
             </Col>
        </Row>

        <Row className="whatwedo-para-row">
        
             <p className="whatwedo-para">
             Niche Is Designed To Build The Robust Relationship Between Truly Talented Sri Lankan Fashion Artists Aspiring To Build Their Own Brand And Expand It To Other Horizons And Fashion Enticing Customers Who Pursue A Sri Lankan Taste Of Clothing And Accessories. Our Ultimate Purpose Is To Build A Sustainable Fashion Ecosystem By Connecting Sri Lankan Brands With The Outside World. The Dedicated Team At Niche Ensures Your Brand Is Offered A Unique Marketplace Supported With Constant Marketing And Advertising That Reach Out To The Potential Customers. Niche Aims To Build A Community Of Fashion Lovers That Could Expressively Transform The Current Traditional Fashion Lackluster Of Sustainability And Ethicality By Promoting The Minute Details Of Fashion Richness. Niche Offers A Unique Marketplace For Each Fashion Brand To Explore Their Way To Pitch Their Products To Niche Customer Base, Engage In Backend Changes When Necessary On Their Own With No Deliberate Intervention From Us Unless Required. The Marketplace Will Be Available On Niche App, The First Fashion App In Sri Lanka Where Brands Meet Their End Customer Directly. Embedded With An Online Payment Gateway, Payhere And Niche Technical Team Ensure The Customers Confidentiality And Privacy Of Data In Online Transactions Are Secured. We Constantly Monitor The Brands And Customer Feedback To Ensure Niche Maintains The Required Standards. 
            </p>
            <p className="whatwedo-para-bold">
            Come Join Us For An Authentic Sri Lankan Fashion <br/> Experience!
            </p>
       </Row>  
       <img alt="" src={Lot} className="bg-img"/>

       </div>
      </Container>
     
    </section>
)
}

export default Hero