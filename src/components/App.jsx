import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Hero from './Hero/Hero';

import { PortfolioProvider } from '../context/context';

import {aboutData} from '../mock/data';

function App() {
  const [about, setAbout] = useState({});

  useEffect(() => {  
    setAbout({ ...aboutData });
  }, []);

  return (
    <PortfolioProvider value={{about}}>
      <Header />
      <Hero />   
      <Contact /> 
      <Projects /> 
      
    </PortfolioProvider>
  );
}

export default App;