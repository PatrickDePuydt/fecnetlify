// Dependencies
import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

// Assets
import BoltLogo from '../../assets/images/BoltLogo.svg'
import { royaleBlue, sapphireBlue } from '../../assets/css/swatches';
import { StyledLink } from '../../assets/css/styledcomponents-text';

// Styled Components
const HeaderWrapper = styled.div`
  max-width: 650px;
  margin: 0 auto;
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`

const Logo = styled.div`
  margin: 0;
  img {
    width: 80px
  }
`

const StyledNav = styled.nav`
    margin: 0;
    flex 2;
    
    ul {
      margin: 0;
      display: flex;
      justify-content: space-evenly;

        @media screen and (min-width: 992px) {
          justify-content: flex-end;
        }

       li {
        margin: 0 15px 30px 15px;
        list-style-type: none;
      }
    }
`

const FlagshipBanner = styled.h1`
    color: ${royaleBlue};
    font-family: 'Signika', sans-serif;
    font-size: 50px;
    text-align: center;
    
    @media screen and (min-width: 992px) {
      text-align: left;
      font-size: 80px;
    }
`


const Header = () => (
	<HeaderWrapper id="HeaderWrapper">
    
    <HeaderContainer id="HeaderContainer">
      
      <Logo id="Logo">
        <Link to="/" id="Bolt Logo">
          <img src={BoltLogo} alt="Logo: Front-End Careers"/>
        </Link>
      </Logo>

      <StyledNav>
        <ul>
          <li>
            <Link to="/" style={{textDecoration: 'none'}}>
              <StyledLink>
                Home
              </StyledLink>
            </Link>
          </li>
          <li>
            <Link to="/ask/" style={{textDecoration: 'none'}}>
              <StyledLink>
                Ask a Question
              </StyledLink>
            </Link>
          </li>
        </ul>
      </StyledNav>  

    </HeaderContainer>

    <Link to="/" style={{ textDecoration: 'none' }}>
      <FlagshipBanner>Front-End Careers</FlagshipBanner>
    </Link>

	</HeaderWrapper>
)

export default Header
