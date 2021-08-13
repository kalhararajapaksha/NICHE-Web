import React, { useState, useEffect } from 'react';
import FeaturesL from './Features/Features_L';
import FeaturesR from './Features/Features_R';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Hero from './Hero/Hero';
import Map from './MapWorld/Map';
import About from './About/About';
import Sellers from './Sellers/Sellers';
import Submit from './Submit/Submit';
import { PortfolioProvider } from '../context/context';
import {aboutData} from '../mock/data';

function App() {
  const [about, setAbout] = useState({});

  useEffect(() => {  
    setAbout({ ...aboutData });
  }, []);

  return (
    <PortfolioProvider value={{about}}>
      <Hero /> 
      <About /> 
      <Map />
      <FeaturesL /> 
      <FeaturesR /> 
      <FeaturesL /> 
      <Hero /> 
      <Sellers />
      <Submit />  
    </PortfolioProvider>
  );
}

export default App;