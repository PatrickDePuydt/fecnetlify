// Dependencies
import React from 'react';
import styled from 'styled-components'
import { Headline, Highlight, InvisibleBreak, SubHead, Copy, SubCopy } from "../../assets/css/styledcomponents-text";
import { dustyGray, whiteGuilt, sapphireBlue } from '../../assets/css/swatches';

// Modules
import Mailchimp from '../Modules/Mailchimp'
import FormSpree from './formspree';

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

const AskAQuestion = () => (
    <section>
        <Headline>
            <Highlight color={sapphireBlue}>Ask</Highlight>&nbsp; us anything about web development! 
        </Headline>

        <div>
            <Copy>Dumb question? Something still isn't clear? Have no idea where to start? Feeling overwhelmed?&nbsp;<Highlight color={dustyGray}>We can help.</Highlight></Copy>

            <FormSpree />

            <InvisibleBreak />
        </div>
    </section>
);

export default AskAQuestion;