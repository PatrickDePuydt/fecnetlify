// Dependencies
import React from 'react';
import styled from 'styled-components'

// Assets
import { Headline, Highlight, MiniInvisibleBreak, InvisibleBreak, SubHead, Copy, SubCopy, Hammer } from "../../assets/css/styledcomponents-text";
import { whiteGuilt, dustyGray, barelyBlue, cobaltBlue, sapphireBlue, royaleBlue, thatsOrange } from '../../assets/css/swatches';

// Modules

// Styled Components
const StyledLocalFlaglocalFlag = styled.h5`
    color: ${sapphireBlue};
    font-size: 26px;
    font-family: 'Nunito', sans-serif;
    text-align: center;

    @media screen and (min-width: 992px) {
        text-align: left;
        font-size: 21px;
    }
`
const StyledLocalHammer = styled.h4`
    color: ${dustyGray};
    font-size: 21px;
    font-family: 'Signika', sans-serif;
    text-decoration: none;
    text-align: center;
    margin: 20px 0 60px 0;

     @media screen and (min-width: 992px) {
        text-align: left;
        font-size: 28px;
    }
`

const StyledLocalSection = styled.section`
    width: 100%;
    margin: auto;

    @media screen and (min-width: 992px) {
        width: 500px;
    }
`


const SayHiToUs = () => (
    <StyledLocalSection>
        
        <StyledLocalFlaglocalFlag>
            Our Sweetheart Promise ️❤️
        </StyledLocalFlaglocalFlag>

        <StyledLocalHammer>We Solemnly Swear to <Highlight color={whiteGuilt} background={cobaltBlue}>Be Nice</Highlight></StyledLocalHammer>

        <Copy>Coding is <Highlight color={whiteGuilt} background={cobaltBlue}>hard enough</Highlight>, there's no reason to make it harder.</Copy>

        <Copy>There's something in our field  called <Highlight color={whiteGuilt} background={cobaltBlue}>Imposter Syndrome</Highlight> where you think you're a fraud because you don't have a computer science background.</Copy>

        <Copy>Leeeetttttsss... not do that here. You're not a fraud.</Copy>

        <Copy>At Front-End Careers, we know what you're going through. <Highlight color={whiteGuilt} background={cobaltBlue}>Come talk to us</Highlight> and we'll use plain English and get to the bottom of whatever is blocking you.</Copy>

        <Copy><Highlight color={whiteGuilt} background={cobaltBlue}>Everyone</Highlight> is welcome.</Copy>

       
    </StyledLocalSection>
);

export default SayHiToUs;