import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Title from '../Title/Title';
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";

const Footer = () => {
    return (
      <section id="footer" className="multi-bg-example pb-0">
      <Container>
        
        
        <Row className="footer-wrapper footrdetails pt-5">
          <Col xs={12} sm={12} md={6} lg={6} >
              <ul className='legal-docs'>
                <li><Link target="_blank" to="/privacypolicy">Privacy Policy</Link></li>  
                <li><Link target="_blank" to="/">Terms & Conditions</Link></li>
                <li><Link target="_blank" to="/disclaimer">Disclaimer</Link></li>
                <li><Link target="_blank" to="/aup">Acceptable Use Policy</Link></li>
                <li><Link target="_blank" to="/returnpolicy">Return Policy</Link></li>
              </ul>
          </Col>

          <Col xs={12} sm={12} md={6} lg={6} >
            <div className="footer-details-follow">
                <h2>Follow Us</h2>
            </div>
            <div className="social-row">
              <div className="social-col" >    
                <button className="socialbtn"><TiSocialFacebook className="icon" /></button>
              </div>
              <div className="social-col" >    
                <button className="socialbtn"><AiFillInstagram className="icon"/></button>
              </div>
              <div className="social-col" >    
                <button className="socialbtn"><AiOutlineTwitter className="icon" /></button>
              </div>
            </div>
            <div className="footer-details mt-5">
              <h2>Reach us on</h2>
              <div className="footer-wrapper__info">
                <p className="footer-wrapper__info-text">
                  {'Niche Support: support@niche.lk'}
                </p>
                <p className="footer-wrapper__info-text">
                  {'Niche Vendor Support: bussiness@niche.lk'}
                </p>
                <p className="footer-wrapper__info-text">
                  {'Contact Number: +9476 728 2246'}
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="footer-wrapper footrdetails">
          <Col>
            <p className="footer-wrapper__info-text ftrunderpart">
                    {'Copyright © NICHE 2021'}
                    
            </p>
          </Col>
        </Row>
        
      </Container>
     
    </section>
)
}

export default Footer