import React, { useState, useEffect } from 'react';
import About from './About/About';
import { PortfolioProvider } from '../context/context';
import {aboutData} from '../mock/data';

function Contact() {
  const [about, setAbout] = useState({});

  useEffect(() => {  
    setAbout({ ...aboutData });
  }, []);

  return (
    <PortfolioProvider value={{about}}>
      <About />   
    </PortfolioProvider>
  );
}

export default Contact;