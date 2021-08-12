import React from 'react';
import Header from './Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const Layout = props => (
  <>
    <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ''}`}>
      <div id="wrapper" className="wrapper">
      <Header />
      {props.children}
      </div>
    </div>
  </>
);

export default Layout;