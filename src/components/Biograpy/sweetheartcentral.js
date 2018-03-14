// Dependencies
import React from 'react';
import styled from 'styled-components'
import { Headline, Highlight, MiniInvisibleBreak, InvisibleBreak, SubHead, Copy, SubCopy, Hammer, Flag } from "../../assets/css/styledcomponents-text";
import { dustyGray, barelyBlue, cobaltBlue, sapphireBlue } from '../../assets/css/swatches';

// Styled Components
const LocalStyledArticle = styled.article`
    display: flex;
    justify-content: center;

    @media screen and (min-width: 992px) {
        justify-content: flex-start;    
    }
`

export default () => (
    <section id="sweetheart">
        <div>
            <Flag><Highlight>&nbsp;We're </Highlight>&nbsp;Sweetheart Developer Central </Flag>
            <LocalStyledArticle>
                <span>❤️</span>
                <span>❤️</span>
                <span>❤️</span>
            </LocalStyledArticle>
            <Copy>We've been there (especially Pat). You're lost, confused, a little angry. You feel stupid, and when you ask for help
              you're met with the Asshole Senior Dev who tells you to Google your error.
              </Copy>
            <Copy>
                Well, that might work for some people, we're going to be more gentle around here.
                <Highlight>We're going to be nice.</Highlight>
            </Copy>
        </div>
    </section>
);