import React from 'react';
import { Helmet } from 'react-helmet';
import { headData } from '../mock/data';
import App from '../components/App';
import Layout from '../components/Layout';


export default () => {
  const { title, lang, description } = headData;

  return (
      <Layout bodyClass="page-home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Niche'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Niche'} />
      </Helmet>
      <App />
      </Layout>
  );
};