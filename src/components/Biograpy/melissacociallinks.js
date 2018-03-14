// Dependencies
import React from 'react';
import styled from 'styled-components'
import { Headline, Highlight, MiniInvisibleBreak, InvisibleBreak, SubHead, Copy, SubCopy, Hammer, StyledDryLink } from "../../assets/css/styledcomponents-text";
import { dustyGray, barelyBlue, cobaltBlue, sapphireBlue } from '../../assets/css/swatches';

// Styled Compnents
const StyledUnorderedList = styled.ul `
    list-style-type: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    align-items: center;
    
    @media screen and (min-width: 992px) {
        justify-content: center;
        flex-direction: row;
    }

`


const StyledListItem = styled.li`
    margin: 20px 0;

     @media screen and (min-width: 992px) {
        margin: 10px 0;
    }
`

export default () => (
    <section>
        <StyledUnorderedList>
            <StyledListItem>

                <StyledDryLink
                    href="https://www.instagram.com/melissadepuydt/"
                    target="_blank"
                    color={dustyGray}
                    mobileSize="32px"
                    desktopSize="18px"
                    borderColor={barelyBlue}
                    hoverColor={sapphireBlue}
                    hoverBorderColor={sapphireBlue}
                >
                    Instagram
                </StyledDryLink>
            </StyledListItem>

            <StyledListItem>
                <StyledDryLink
                    href="https://twitter.com/melissadepuydt"
                    target="_blank"
                    color={dustyGray}
                    mobileSize="32px"
                    desktopSize="18px"
                    borderColor={barelyBlue}
                    hoverColor={sapphireBlue}
                    hoverBorderColor={sapphireBlue}
                >
                    Twitter
                </StyledDryLink>
             
            </StyledListItem>
            
            <StyledListItem>
                <StyledDryLink
                    href="https://www.linkedin.com/in/melissasteffan"
                    target="_blank"
                    color={dustyGray}
                    mobileSize="32px"
                    desktopSize="18px"
                    borderColor={barelyBlue}
                    hoverColor={sapphireBlue}
                    hoverBorderColor={sapphireBlue}

                >
                    LinkedIn
                </StyledDryLink>
                
            </StyledListItem>

        </StyledUnorderedList>
    </section>
);