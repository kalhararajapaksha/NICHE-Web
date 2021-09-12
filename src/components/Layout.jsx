import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import '../style/main.scss';

const Layout = props => (
  <>
    <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ''}`}>
      <div id="wrapper" className="wrapper">
      <Header />
      {props.children}
      <Footer />
      </div>
    </div>
  </>
);

export default Layout;