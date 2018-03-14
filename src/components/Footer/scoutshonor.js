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
        <h3>Scouts Honor</h3>

        <MiniCopy>Pat was a Boy Scout growing up and it had a <Highlight>sincere positive impact</Highlight> on the way he wants to conduct business. Shout out to Catalina Council.</MiniCopy>

        <MiniCopy>A Scout is <Highlight>Trustworthy, Loyal, Helpful, Friendly</Highlight> , Courteous, Kind, Obedient, Cheerful, Thrifty, Brave, Clean and Reverent.</MiniCopy>

        <MiniCopy> That's what <Highlight>you can expect around here.</Highlight></MiniCopy>

        <MiniCopy> Pat does like his F-bombs, so expect a few of those.</MiniCopy>
       
    </StyledSection>
);

export default ScoutsHonor;