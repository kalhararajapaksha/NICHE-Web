import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PortfolioProvider } from '../context/context';
import {aboutData} from '../mock/data';

function App() {
  const [about, setAbout] = useState({});

  useEffect(() => {  
    setAbout({ ...aboutData });
  }, []);

  return (
    <PortfolioProvider value={{about}}>
      <Container>
        <Row>
          <Col lg='12' className='mt-5'>
            <h1 className='mt-5 pt-5 pb-5'>Privacy Policy</h1>
            <p>
              This Privacy Policy describes how NICHE (the “Site” or “we”) collects, uses, 
              and discloses your Personal Information when you visit or make a purchase from the Site.
              <br/><br/>
              We collect information about you during the checkout process on our store.
              <br/><br/>
              While you visit our site, we’ll track:
              <br/><br/>
              <ul>
                <li>Products you’ve viewed: we’ll use this to, for example, show you products you’ve recently viewed</li>
                <li>Location, IP address and browser type: we’ll use this for purposes like estimating taxes and shipping</li>
                <li>Shipping address: we’ll ask you to enter this so we can, for instance, estimate shipping before you place an order, and send you the order!</li>
              </ul>
              We’ll also use cookies to keep track of cart contents while you’re browsing our site.
              <br/><br/>
              When you purchase from us, we’ll ask you to provide information including your name, billing address, shipping address, email address, phone number, credit card/payment details and optional account information like username and password.
              We’ll use this information for purposes, such as, to:
              <ul>
                <li>Send you information about your account and order</li>
                <li>Respond to your requests, including refunds and complaints</li>
                <li>Process payments and prevent fraud</li>
                <li>Set up your account for our store</li>
                <li>Comply with any legal obligations we have, such as calculating taxes</li>
                <li>Improve our store offerings</li>
                <li>Send you marketing messages, if you choose to receive them</li>
              </ul>
              <br/><br/>
              If you create an account, we will store your name, address, email and phone number, which will be used to populate the checkout for future orders.
              <br/><br/>
              We generally store information about you for as long as we need the information for the purposes for which we collect and use it, and we are not legally required to continue to keep it. For example, we will store order information for XXX years for tax and accounting purposes.
              This includes your name, email address and billing and shipping addresses.
              <br/><br/>
              We will also store comments or reviews, if you choose to leave them.
            </p>

            <div className='mt-5'>
              <h2>Comments</h2>
              <p>
                When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
                An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.
              </p>
            </div>
            <div className='mt-5'>
              <h2>Media</h2>
              <p>
              If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
              </p>
            </div>
            <div className='mt-5'>
              <h2>Contact forms</h2>
              <p>
              When you submit a contact form, personal data will be captured. Contact form submissions will be kept for a certain period for customer service purposes, but the information submitted through contact form will not be used for marketing purposes.
              </p>
            </div>
            <div className='mt-5'>
              <h2>Cookies</h2>
              <p>
                If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
                <br/><br/>
                If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
                <br/><br/>
                When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
                <br/><br/>
                If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.

              </p>
            </div>
            <div className='mt-5'>
              <h2>Embedded content from other websites</h2>
              <p>
                Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
                <br/><br/>
                These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
              </p>
            </div>
            <div className='mt-5'>
              <h2>Analytics</h2>
              <p>
              We may also partner with selected third-party vendors to allow tracking technologies and remarketing services on the Site through the use of first party cookies and third-party cookies, to, among other things, analyze and track users’ use of the Site to determine the popularity of certain content and better understand online activity. By accessing the Site, you consent to the collection and use of your information by these third-party vendors. You are encouraged to review their privacy policy and contact them directly for responses to your questions. We do not transfer personal information to these third-party vendors. However, if you do not want any information to be collected and used by tracking technologies, you can visit the third-party vendor or the Network Advertising Initiative Opt-Out Tool or Digital Advertising Alliance Opt-Out Tool. 
              <br/><br/>
              You should be aware that getting a new computer, installing a new browser, upgrading an existing browser, or erasing or otherwise altering your browser’s cookies files may also clear certain opt-out cookies, plug-ins, or settings.
              </p>
            </div>
            <div className='mt-5'>
              <h2>Who on our team has access</h2>
              <p>
                Members of our team have access to the information you provide us. For example, both Administrators and Shop Managers can access:
                <ul>
                  <li>
                  Order information like what was purchased, when it was purchased and where it should be sent, and
                  </li>
                  <li>
                  Customer information like your name, email address, and billing and shipping information.
                  </li>
                </ul>
                Our team members have access to this information to help fulfill orders, process refunds and support you.
              </p>
            </div>
            <div className='mt-5'>
              <h2>Who we share your data with</h2>
              <p>
                If you request a password reset, your IP address will be included in the reset email.
              </p>
            </div>
            <div className='mt-5'>
              <h2>How long we retain your data</h2>
              <p>
                If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
                <br/><br/>
                For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
              </p>
            </div>
            <div className='mt-5'>
              <h2>What rights you have over your data</h2>
              <p>
              If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
              </p>
            </div>
            <div className='mt-5'>
              <h2>Where we send your data</h2>
              <p>
                Visitor comments may be checked through an automated spam detection service.
                <br/><br/>
                We share information with third parties who help us provide our orders and store services to you.
              </p>
            </div>
            <div className='mt-5 mb-5'>
              <h2>Payments</h2>
              <p>
              We accept payments through PayPal. When processing payments, some of your data will be passed to PayPal, including information required to process or support the payment, such as the purchase total and billing information.
                <br/><br/>
                Please see the <a href='https://www.payhere.lk/privacy'> <strong> PayHere Privacy Policy</strong></a> for more details.
              </p>
            </div>
          </Col>
        </Row>      
      </Container>
    </PortfolioProvider>
  );
}

export default App;