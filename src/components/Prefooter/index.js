// Dependencies
import React from 'react';
import styled from 'styled-components'

// Assets
import { Headline, Highlight, MiniInvisibleBreak, InvisibleBreak, SubHead, Copy, SubCopy, Hammer } from "../../assets/css/styledcomponents-text";
import { dustyGray, barelyBlue, cobaltBlue, sapphireBlue, royaleBlue } from '../../assets/css/swatches';

// Modules
import MailChimp from '../Modules/Mailchimp';

// Styled Components
const LocalSubHead = styled.h3`
    color: ${royaleBlue};
    font-family: 'Signika';
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    font-size: 32px;

     @media screen and (min-width: 992px) {
        font-size: 21px;
        text-align: left;
    }
`

// Styled Components
const LocalSubCopy = styled.p`
    color: ${dustyGray};
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    line-height: 21px;
    margin: 0 auto;
    text-align: center;
    max-width: 400px;

     @media screen and (min-width: 992px) {
    }
`

const Prefooter = () => (
    <section id="footer">
        <InvisibleBreak />
        
        <LocalSubHead>Sign Up for the Newsletter</LocalSubHead>
        
        <Copy>
            See what others are asking. We'll include <Highlight>real-world best practices and tips</Highlight>, too.
        </Copy>

        <MiniInvisibleBreak />
        
        <MailChimp />

        <LocalSubCopy>We try to send it weekly but we're human beings and stuff. Also, there's the dog, and she kinda runs the show.</LocalSubCopy>

        <InvisibleBreak />
    </section>
);

export default Prefooter;