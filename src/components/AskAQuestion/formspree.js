// Dependencies
import React from 'react';
import styled from 'styled-components'
import { Headline, Highlight, InvisibleBreak, SubHead, Copy, SubCopy, StyledButton, StyledInput, StyledDryInput } from "../../assets/css/styledcomponents-text";
import { dustyGray, whiteGuilt, sapphireBlue, royaleBlue, cobaltBlue } from '../../assets/css/swatches';

// Modules


// Styled Components
const LocalStyledButton = styled.input`
    width: 100%;
    margin-top: 10px;
    color: ${whiteGuilt};
    background: ${sapphireBlue};
    font-size: 30px;
    border: none;
    padding: 25px;
    font-family: 'Signika', sans-serif;
    transition: .25s all ease;

    @media screen and (min-width: 992px) {
        padding: 10px;
        display: block;
        font-size: 21px;
        margin: auto;
        width: 30%;
    }

    :hover {
        background: ${cobaltBlue};
        letter-spacing: 3px;
    }
`


const FormSpree = () => (
    <section>
        <form action="https://formspree.io/jello@frontendcareers.website"
            method="POST">
            <StyledDryInput
                desktopWidth="100%"
                mobileSize="18px"
                type="text"
                name="question"
                placeholder="What can we answer for you? 🤔&nbsp;"
            />
            <StyledDryInput
                desktopWidth="100%"
                mobileSize="18px"
                type="text"
                name="name"
                placeholder="Name? (requested 😎&nbsp;)" />
            <StyledDryInput
                desktopWidth="100%"
                mobileSize="18px"
                type="email"
                name="email"
                placeholder="email? (required 👍&nbsp;) " />
            <LocalStyledButton
                className="{submitButton}"
                type="submit"
                value="Ask Away"
            />
        </form>
    </section>
);

export default FormSpree;