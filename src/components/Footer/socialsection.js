// Dependencies
import React from 'react';
import styled from 'styled-components'

// Assets
import { Headline, Highlight, MiniInvisibleBreak, InvisibleBreak, SubHead, Copy, SubCopy, Hammer, StyledDryLink, WokeBreak } from "../../assets/css/styledcomponents-text";
import { whiteGuilt, dustyGray, barelyBlue, cobaltBlue, sapphireBlue, royaleBlue, thatsOrange } from '../../assets/css/swatches';

// Modules
import SocialMedia from '../Biograpy/patscociallinks'

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
// Styled Compnents
const StyledUnorderedList = styled.ul`
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



const SocialSection = () => (
    <section>
        
        <StyledLocalFlaglocalFlag>Social Media Stuff</StyledLocalFlaglocalFlag>
        
        <StyledUnorderedList>

            <StyledListItem>
                <StyledDryLink

                    href="https://www.instagram.com/patdepuydt/"
                    target="_blank"

                    color={whiteGuilt}
                    mobileSize="32px"
                    desktopSize="18px"
                    borderColor={royaleBlue}

                    hoverColor={thatsOrange}
                    hoverBorderColor={thatsOrange}

                >
                    Instagram
                </StyledDryLink>
            </StyledListItem>

            <StyledListItem>
                <StyledDryLink

                    href="https://twitter.com/PatrickDePuydt"
                    target="_blank"

                    color={whiteGuilt}
                    mobileSize="32px"
                    desktopSize="18px"
                    borderColor={royaleBlue}

                    hoverColor={thatsOrange}
                    hoverBorderColor={thatsOrange}
                >
                    Twitter
                </StyledDryLink>
            </StyledListItem>

            <StyledListItem>
                <StyledDryLink

                    href="https://www.youtube.com/channel/UCVcpXYDvagAuNxcmvqobZkQ?view_as=public"
                    target="_blank"

                    color={whiteGuilt}
                    mobileSize="32px"
                    desktopSize="18px"
                    borderColor={royaleBlue}

                    hoverColor={thatsOrange}
                    hoverBorderColor={thatsOrange}
                >
                    YouTube
                </StyledDryLink>
            </StyledListItem>

            <StyledListItem>
                <StyledDryLink

                    href="https://www.facebook.com/sweetheartseniordev/"
                    target="_blank"

                    color={whiteGuilt}
                    mobileSize="32px"
                    desktopSize="18px"
                    borderColor={royaleBlue}

                    hoverColor={thatsOrange}
                    hoverBorderColor={thatsOrange}
                >
                    Facebook
                </StyledDryLink>
            </StyledListItem>

            <StyledListItem>
                <StyledDryLink

                    href="https://www.linkedin.com/in/patrickdepuydt"
                    target="_blank"

                    color={whiteGuilt}
                    mobileSize="32px"
                    desktopSize="18px"
                    borderColor={royaleBlue}

                    hoverColor={thatsOrange}
                    hoverBorderColor={thatsOrange}
                >
                    LinkedIn
                </StyledDryLink>
            </StyledListItem>

        </StyledUnorderedList>
       <WokeBreak background={sapphireBlue}/>
    </section>
);

export default SocialSection;