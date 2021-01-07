import React from 'react'

import {
  Nav,
  NavContainer,
  MenuContainer,
  MenuIcon,
  Menu,
  MenuText,
  MenuItem,
  NavLinkIcon,
  MenuLink
} from './Sidebar.styles'
const Sidebar = () => {
  return (
      <Nav>
        <NavContainer>
          <MenuContainer>
            <MenuIcon/>
            <MenuText>Menu</MenuText>
          </MenuContainer>
          <Menu>
            <MenuItem>
               <MenuLink to='/'>
                  <NavLinkIcon/>
                  Home
                </MenuLink>
            </MenuItem>
            <MenuItem>
               <MenuLink to='/about'>
                  <NavLinkIcon/>
                  About
                </MenuLink>
            </MenuItem>
            <MenuItem>
               <MenuLink to='/projects'>
                  <NavLinkIcon/>
                  Projects
                </MenuLink>
            </MenuItem>
            <MenuItem>
               <MenuLink to='/blog'>
                  <NavLinkIcon/>
                  Blog
                </MenuLink>
            </MenuItem>
            <MenuItem>
               <MenuLink to='/contact'>
                  <NavLinkIcon/>
                  Contact
                </MenuLink>
            </MenuItem>
          </Menu>
        </NavContainer>
      </Nav>
      
   
  )
}

export default Sidebar
