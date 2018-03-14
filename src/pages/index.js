// Dependencies
import React from 'react'
import Link from 'gatsby-link'

// Parts
import Payload from '../components/Payload'
import Biography from '../components/Biograpy';
import Prefooter from '../components/Prefooter';
import Footer from '../components/Footer';
import Mailchimpform from '../components/Modules/Mailchimp/mailchimpform';

const IndexPage = () => (
  <div>

    <Payload />

    <Biography />

    <Prefooter />

    <Footer />

  </div>
);

export default IndexPage
