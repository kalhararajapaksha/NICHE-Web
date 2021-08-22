import React from 'react';
import { Helmet } from 'react-helmet';
import SellwithusForm from '../components/FormSellWithusLayout';
import { headData } from '../mock/data';
import Layout from '../components/Layout';
import Stepcontext from '../StepContext';



export default () => {
  const { title, lang, description } = headData;

  return (
    <>
     <Layout bodyClass="page-contact">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
      </Helmet>
        <Stepcontext>
        <SellwithusForm />
        </Stepcontext>
      </Layout>
    </>
  );
};