// Dependencies
import React from 'react';
import styled from 'styled-components'
import { Headline, Highlight, InvisibleBreak, SubHead, Copy, SubCopy } from "../../assets/css/styledcomponents-text";
import { dustyGray, whiteGuilt, sapphireBlue } from '../../assets/css/swatches';

// Modules
import Mailchimp from '../Modules/Mailchimp'

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

const Payload = () => (
    <header>
        <Headline>
            A <Highlight color={sapphireBlue}>&nbsp;newsletter </Highlight>&nbsp;for folks who want a new career in front-end web development.
        </Headline>

        <InvisibleBreak />
        
        <article>

            <Mailchimp />

            <LocalSubCopy>We try to send it weekly but we're human beings and stuff. Also, there's the dog, and she kinda runs the show.</LocalSubCopy>

        </article>

        <InvisibleBreak />
        
        <div>
            <SubHead>Want to change jobs into web development?</SubHead>

            <Copy>If you've been mulling over changing careers into coding, there's a lot <Highlight>between the decision moment </Highlight> and starting a new job.</Copy>

            <Copy>And let's be real: Between the technical skills, the soft skills, the interviews, code challenges and all the frustration that comes with it... <Highlight>it isn't easy. </Highlight> We've been there.</Copy>

            <Copy>Neither of the authors of this site started in Web Development (Melissa - Journalism & Pat - Liberal Arts). <Highlight>We both started from scratch</Highlight>. We know what it takes.</Copy>

            <Copy>Let us help you reach your goal. We've learned a lot about what it takes that and Melissa and I <Highlight>would like to share with you.</Highlight></Copy>

            <Copy>You're not <Highlight>alone.</Highlight></Copy>
        </div>
    </header>
);

export default Payload;