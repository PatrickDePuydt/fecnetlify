// Dependencies
import React from 'react';
import styled from 'styled-components'

// Assets
import { Headline, Highlight, MiniInvisibleBreak, InvisibleBreak, SubHead, Copy, SubCopy, Hammer, ColorContainer, WokeBreak, StyledDryLink } from "../../assets/css/styledcomponents-text";
import { whiteGuilt, dustyGray, barelyBlue, cobaltBlue, sapphireBlue, royaleBlue, thatsOrange } from '../../assets/css/swatches';

// Modules
import SayHiToUs from './sayhitous';
import SocialSection from './socialsection';
import SweetheartPromise from './sweetheartpromise';
import ScoutsHonor from './scoutshonor';
import AffiliateFreeZone from './affiliatefreezone';

// Styled Components

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
   
    
    @media screen and (min-width: 992px) {
        padding: 15px;
        flex-direction: row;
    }
`


const Footer = () => (
    <div>
        <InvisibleBreak />
        <ColorContainer background={royaleBlue}>
            <WokeBreak background={royaleBlue} />
            <SayHiToUs />
        </ColorContainer>

        <ColorContainer background={sapphireBlue}>
            <WokeBreak background={sapphireBlue} />
            <SocialSection />
        </ColorContainer>

        <ColorContainer background={barelyBlue}>
            <WokeBreak background={barelyBlue} />
            <SweetheartPromise />
        </ColorContainer>

        <StyledSection>
            <ScoutsHonor />
            <AffiliateFreeZone />
        </StyledSection>

        <hr  />
        <Copy>Made with ❤️&nbsp; in D.C. | &copy; 2018 Front-End Careers</Copy>
        
    </div>
);

export default Footer;