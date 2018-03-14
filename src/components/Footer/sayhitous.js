// Dependencies
import React from 'react';
import styled from 'styled-components'

// Assets
import { Headline, Highlight, MiniInvisibleBreak, InvisibleBreak, SubHead, Copy, SubCopy, Hammer } from "../../assets/css/styledcomponents-text";
import { dustyGray, barelyBlue, cobaltBlue, sapphireBlue, royaleBlue } from '../../assets/css/swatches';

// Modules

// Styled Components
const StyledLocalFlaglocalFlag = styled.h5`
    color: white;
    font-size: 21px;
    font-family: 'Nunito', sans-serif;
    text-align: center;
`
const StyledLocalSticker = styled.h6`
    color: white;
    font-size: 23px;
    font-family: 'Nunito', sans-serif;
    text-align: center;
    text-decoration: none;

     @media screen and (min-width: 992px) {
        font-size: 34px;
    }
`
const StyledLocalSubCopy = styled.p`
    color: ${sapphireBlue};
    font-size: 16px;
    font-family: 'Nunito', sans-serif;
    text-align: center;

    @media screen and (min-width: 992px) {
        font-size: 14px;
    }
`

const SayHiToUs = () => (
    <section>
        
        <StyledLocalFlaglocalFlag>Say Hi to Us 👋</StyledLocalFlaglocalFlag>
        
        <StyledLocalSticker>jello@frontendcareers.website</StyledLocalSticker>
        
        <StyledLocalSubCopy> Get it? Hello? -> "Jello"? hahahaha </StyledLocalSubCopy>
       
    </section>
);

export default SayHiToUs;