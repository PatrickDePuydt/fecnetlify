// Assets
import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { Headline, Highlight, MiniInvisibleBreak, InvisibleBreak, SubHead, Copy, SubCopy, Hammer, ColorContainer, WokeBreak, StyledDryLink } from "../assets/css/styledcomponents-text";
import { whiteGuilt, dustyGray, barelyBlue, cobaltBlue, sapphireBlue, royaleBlue, thatsOrange } from "../assets/css/swatches";


// Modules
import AskAQuestion from "../components/AskAQuestion";
import MailChimp from "../components/Modules/Mailchimp";
import Footer from "../components/Footer";


// CSS Modules
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
`;


const SecondPage = () => (
    <div>

        <AskAQuestion />

        <InvisibleBreak />

        <SubHead>Sign up for the newsletter to see your answers.</SubHead>
    
        <MailChimp />

        <LocalSubCopy>We try to send it weekly but we're human beings and stuff. Also, there's the dog, and she kinda runs the show.</LocalSubCopy>

        <Footer />
    
    </div>
);

export default SecondPage;
