import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import { Button } from '@mui/material';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Galewela</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#home">Home</NavLink>
          <NavLink href='#about'>About</NavLink>
          <NavLink href='#notices'>Notices</NavLink>    
          <NavLink href='#projects'>Projects</NavLink>    
          <NavLink href='#contact'>Contact</NavLink>
          <NavLink href='#footer'>Footer</NavLink>
        </NavItems>

        <ButtonContainer>
            <Button>English</Button>
        </ButtonContainer>
        <ButtonContainer>
            <Button>Sinhala</Button>
        </ButtonContainer>
        <ButtonContainer>
            <Button>Tamil</Button>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Notices</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#contact' onClick={() => {
              setIsOpen(!isOpen)
            }}>Contact</MobileLink>



            <Button style={{padding: '10px 12px',background: `${theme.primary}`, color: 'white',width: 'max-content'}}>Github Profile</Button>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar