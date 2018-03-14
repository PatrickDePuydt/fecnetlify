import styled from 'styled-components'

import { barelyBlue, sapphireBlue, royaleBlue, thatsOrange, dustyGray, bestBlack, whiteGuilt } from "./swatches";

// Buttons & Links
export const StyledLink = styled.span`
    font-family: 'Nunito';
    color: ${royaleBlue};
    transition: .25s all ease-in;
    font-weight: 400;
    border-bottom: 4px solid white;
    font-size: 25px;
   
    :hover {
        border-bottom: 4px solid ${barelyBlue};
        color: ${sapphireBlue};
    }


    @media screen and (min-width: 992px) {
        font-weight: 300;
        font-size: 20px;
    }
`

// Heading Tags
// h2
export const Headline = styled.h2`
    color: ${sapphireBlue};
    font-family: 'Signika';
    font-size: '24px';
    line-height: '38px';
    text-align: center;

     @media screen and (min-width: 992px) {
        text-align: left;
    }
`
// h3
export const SubHead = styled.h3`
    color: ${dustyGray};
    font-family: 'Nunito';
    font-size: '18px';
    line-height: '38px';
    text-align: center;

     @media screen and (min-width: 992px) {
        text-align: left;
    }
`
// h4
export const Hammer = styled.h4`
    color: ${dustyGray};
    font-family: 'Nunito', sans-serif;
      text-align: center;

     @media screen and (min-width: 992px) {
        text-align: left;
    }
`

export const Flag = styled.h5`
    color: ${ dustyGray },
    fontFamily: 'Signika', sans-serif;
    text-align: center;
    font-size: 24px;

     @media screen and (min-width: 992px) {
        text-align: left;
        font-size: 21px;
    }
`

// Copy
export const Copy = styled.p`
    color: ${bestBlack};
    font-family: 'Nunito', sans-serif;
    line-height: 50px;
    margin: 20px 0 30px 0;
    text-align: center;
    font-size: 24px;

     @media screen and (min-width: 992px) {
        margin: 20px 0px;
        line-height: 35px; 
        font-size: 18px;
        text-align: left;
    }
`

export const SubCopy = styled.p`
    color: ${dustyGray};
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    line-height: 35px;
    margin: 20px 0px;
    text-align: center;

     @media screen and (min-width: 992px) {
        text-align: left;
    }
`

export const MiniCopy = styled.p`
    color: ${dustyGray};
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    line-height: 35px;
    margin: 20px 0px;
    text-align: center;

     @media screen and (min-width: 992px) {
        font-size: 14px;
        text-align: left;
    }
`

// Effects
export const Highlight = styled.span.attrs({
    color: props => props.color || dustyGray,
    background: props => props.background || barelyBlue
}) `
    padding-right: 5px;
    padding-left: 5px;
    line-height: 38px;
    color: ${props => props.color};
    background: ${props => props.background};

     @media screen and (min-width: 992px) {
    
    }
`;

export const InvisibleBreak = styled.hr`
    margin-top: 30px;
    margin-bottom: 30px;
    background: white;

    @media screen and (min-width: 992px) {
        margin-top: 40px;
        margin-bottom: 40px;
    }
`

export const WokeBreak = styled.section.attrs({
    background: props => props.background || 'white'
}) `
    margin-top: 30px;
    margin-bottom: 30px;
    background: ${props => props.background};

     @media screen and (min-width: 992px) {
        margin-top: 40px;
        margin-bottom: 40px;
    }
`;


export const MiniInvisibleBreak = styled.hr`
    margin-top: 20px;
    margin-bottom: 20px;
    background: white;
`

// Containers
export const ColorContainer = styled.section.attrs({
    background: props => props.background || royaleBlue
}) `
    padding: 10px;
    background: ${props => props.background};

    @media screen and (min-width: 992px) {
        padding: 30px;
        font-size: 34px;
    }
`;

export const StyledDryLink = styled.a.attrs({
    color: props => props.color || whiteGuilt,
    mobileSize: props => props.mobileSize || "30px",
    borderColor: props => props.borderColor || barelyBlue,
    desktopSize: props => props.desktopSize || "28px",
    hoverColor: props => props.hoverColor || royaleBlue,
    hoverBorderColor: props => props.hoverBorderColor || barelyBlue,
}) `

    padding-bottom: 5px;
    margin: 0;
    border-width: 5px;
    border-top: 0;
    border-right: 0;
    border-left: 0;

    border-style: solid;
    font-family: 'Signika', sans-serif;
    text-decoration: none;
    transition: .25s all ease;
    margin: 0px 20px 0px 0px;

    color: ${props => props.color};
    font-size: ${props => props.mobileSize};
    border-color: ${props => props.borderColor};


    :hover {
       color: ${props => props.hoverColor}
       border-color: ${props => props.hoverBorderColor}
    }

    @media screen and (min-width: 992px) {
       font-size: ${props => props.desktopSize}
    }
`;


// Forms


export const StyledInput = styled.input`
    width: 100%;
    font-family: 'Nunito', sans-serif;
    font-size: 30px;
    background: ${whiteGuilt};
    color: ${royaleBlue};
    border: 4px solid ${sapphireBlue};
    height: 75px;
    padding: 10px;
    transition: .25s all ease;
    margin-bottom: 15px;

    :hover {
        background: ${barelyBlue};
        border: 4px solid ${sapphireBlue};
    }

    :focus {
        outline: none;
        padding: 40px;
        font-size: 28px;
        color: ${sapphireBlue};
    }
 
    @media screen and (min-width: 992px) {
        height: 50px;
        padding: 20px;
        font-size: 21px;
        width: 70%;
    }
`

export const StyledButton = styled.button.attrs({
    color: props => props.color || whiteGuilt
}) `
    width: 100%;
    margin-top: 10px;
    color: ${whiteGuilt};
    background: ${thatsOrange};
    font-size: 30px;
    border: none;
    padding: 25px;
    font-family: 'Signika', sans-serif;
    transition: .25s all ease;

    @media screen and (min-width: 992px) {
        padding: 10px;
        font-size: 21px;
        margin-left: 25px;
        width: 25%;
    }

    :hover {
        background: ${sapphireBlue};
        letter-spacing: 3px;
    }

`




export const StyledDryInput = styled.input.attrs({
    destkopWidth: props => props.destkopWidth || '70%',
    mobileWidth: props => props.mobileWidth || '100%',
    destkopSize: props => props.destkopSize || '21px',
    mobileSize: props => props.mobileSize || '30px'
}) `
    font-family: 'Nunito', sans-serif;
    background: ${whiteGuilt};
    color: ${royaleBlue};
    border: 4px solid ${sapphireBlue};
    height: 75px;
    padding: 10px;
    transition: .25s all ease;
    margin-bottom: 15px;
    
    font-size: ${props => props.mobileSize};
    width: ${props => props.mobileWidth};

    :hover {
        background: ${barelyBlue};
        border: 4px solid ${sapphireBlue};
    }

    :focus {
        outline: none;
        padding: 40px;
        font-size: 28px;
        color: ${sapphireBlue};
    }
 
    @media screen and (min-width: 992px) {
        height: 50px;
        padding: 20px;
        font-size: ${props => props.desktopSize};
        width: ${props => props.desktopWidth};
    }
`;