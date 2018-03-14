// Dependencies
import React from 'react';
import styled from 'styled-components'
import { Headline, Highlight, MiniInvisibleBreak, InvisibleBreak, SubHead, Copy, SubCopy, Hammer } from "../../assets/css/styledcomponents-text";
import { dustyGray, barelyBlue, cobaltBlue, sapphireBlue } from '../../assets/css/swatches';

// Assets
import Otter from "../../assets/images/Pat.jpg";
import Dumpling from "../../assets/images/Melissa.jpg";
import PatsSocialLinks from './patscociallinks';
import MelissaSocialLinks from './melissacociallinks';
import SweetHeartCentral from './sweetheartcentral';


// Modules


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

const LocalSubHead = styled.h3`
    color: ${sapphireBlue};
    font-family: 'Signika';
    font-size: 21px;
    line-height: 38px;
    text-align: center;
    font-size: 32px;

     @media screen and (min-width: 992px) {
        font-size: 21px;
        text-align: left;
    }
`

const LocalHammer = styled.h4`
    color: ${dustyGray};
    font-family: 'Nunito', sans-serif;
    text-align: center;
    font-size: 25px;

     @media screen and (min-width: 992px) {
        font-size: 18px;
        text-align: left;
    }

`

const StyledImage = styled.img`
    width: 150px;
    border-radius: 100px;
    border: 2px solid ${cobaltBlue};
    margin: auto;
    display: block;
`

const Biography = () => (
    <section>
        <InvisibleBreak />
        <InvisibleBreak />
        <LocalSubHead>Who are these people?</LocalSubHead>
        <LocalHammer>About Pat & Melissa</LocalHammer>

        <div id="pat">

            <StyledImage src={Otter} alt="Pat" />

            <MiniInvisibleBreak />
            
            <PatsSocialLinks />

            <Copy>
                Pat has a political - science degree and considers himself an artist first and foremost. He is a self-taught front-end developer at a startup in Virginia, an instructor at General Assembly and proud dog dad.
            </Copy>
        </div>

        <InvisibleBreak />

        <div id="melissa">
            <StyledImage src={Dumpling} alt="Melissa" />

            <MiniInvisibleBreak />

            <MelissaSocialLinks />
            
            <Copy>
                Melissa studied journalism and political science in Seattle and went to a coding boot camp. She is now a front-end architect at The Washington Post, an instructor at General Assembly and proud dog mama.
            </Copy>
        </div>

        <InvisibleBreak />

        <SweetHeartCentral />
    </section>
);

export default Biography;