import React from 'react';
import { Helmet } from 'react-helmet';
import Disclaimer from '../components/Disclaimer';
import { headData } from '../mock/data';
import Layout from '../components/Layout';



export default () => {
  const { title, lang, description } = headData;

  return (
    <>
     <Layout bodyClass="page-contact">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Disclaimer'}</title>
        <html lang={lang || 'en'} />
        {/* <meta name="description" content={description || 'Niche'} /> */}
      </Helmet>
        <Disclaimer/>
      </Layout>
    </>
  );
};