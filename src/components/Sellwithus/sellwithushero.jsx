import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Lot from '../../images/flower.png';
import HeroImg from '../../images/hero-phone.png';
import { Link } from 'gatsby';
import { Modal } from '../Modal/Modal';
import Designer from '../../images/designer.mp4';




const Hero = () => {
  //const [showModal, setShowModal] = useState(false);

  //const openModal = () => {
    //setShowModal(prev => !prev);
  //};
    return (
      <>
      <section id="sellhero" className="multi-bg-example">
        <div className="hero-video">
            <video id="index-hero-video" role="presentation" crossorigin="anonymous" playsinline="" preload="auto" loop="loop" autoplay="autoplay" tabindex="-1" muted="muted" class="hero-video" src={Designer}/>
        </div>
        <div className="hero-heading">
            <h2>
                NICHE online shopping store
            </h2>
            <h1>
                Your Brand , Your Way
            </h1>
            <div className="hero-wrapper__info">
              <p className="hero-wrapper__info-text">
                {
                  'Selling with your own virtual store has never been easier, faster and scalable'
                }
              </p>
            </div>
            <Link to="/sellwithusForm" className="btn btn-primary">Sell With Us</Link>
        </div>
      </section>
      
      
      </>
    );
}

export default Hero