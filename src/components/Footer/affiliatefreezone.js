// Dependencies
import React from 'react';
import styled from 'styled-components'

// Assets
import { Headline, Highlight, MiniInvisibleBreak, InvisibleBreak, SubHead, Copy, SubCopy, Hammer, MiniCopy } from "../../assets/css/styledcomponents-text";
import { dustyGray, barelyBlue, cobaltBlue, sapphireBlue, royaleBlue } from '../../assets/css/swatches';

// Styled Components
const StyledSection = styled.section`
    border: 5px solid gold;
    padding: 10px;
    flex: 1;
    margin-top: 15px;
    
    @media screen and (min-width: 992px) {
        margin: 5px;
    }

    h3 {
        text-align: center;
         @media screen and (min-width: 992px) {
            text-align: left;
        }
    }
`

const ScoutsHonor = () => (
    <StyledSection id="scoutsHonor">
        <h3>Affiliate Marketing-Free Zone</h3>

        <MiniCopy>There are lots of ways to make money on the internet, but <Highlight>tricking and taking advantage of someone</Highlight> isn't going happen around here.</MiniCopy>

        <MiniCopy>All product reccomendations, suggestions, classes, courses or plans are made with <Highlight>100% honest intentions</Highlight>.</MiniCopy>

        <MiniCopy>We're willing to pass up money because <Highlight>your trust is more important</Highlight> to us.</MiniCopy>

    </StyledSection>
);

export default ScoutsHonor;