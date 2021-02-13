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
      <Nav aria-label='Main Menu'>
        <NavContainer>
          <MenuContainer>
            <MenuIcon/>
            <MenuText>Menu</MenuText>
          </MenuContainer>
          <Menu>
            <MenuItem>
               <MenuLink to='/' activeStyle={{ color: "#EAAF4A" }}>
                  <NavLinkIcon/>
                  Home
                </MenuLink>
            </MenuItem>
            <MenuItem>
               <MenuLink to='/about' activeStyle={{ color: "#EAAF4A" }}>
                  <NavLinkIcon/>
                  About
                </MenuLink>
            </MenuItem>
            <MenuItem>
               <MenuLink to='/projects' activeStyle={{ color: "#EAAF4A" }}>
                  <NavLinkIcon/>
                  Projects
                </MenuLink>
            </MenuItem>
            <MenuItem>
               <MenuLink to='/blog' activeStyle={{ color: "#EAAF4A" }}>
                  <NavLinkIcon/>
                  Blog
                </MenuLink>
            </MenuItem>
            <MenuItem>
               <MenuLink to='/contact' activeStyle={{ color: "#EAAF4A" }}>
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
