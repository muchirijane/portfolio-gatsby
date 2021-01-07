import React from 'react'
import logo from '../../images/logo.svg'
import {FaTwitter,FaGithub,FaDev,FaLinkedinIn} from 'react-icons/fa'
import {
  SideContainer,
  SideLogoWrapper,
  SocialWrapper,
  SocialIconsWrapper,
  SocialIcons,
  SocialLine
} from './SideInfo.styles'
const SideInfo = () => {
  return (
    <SideContainer>
      <SideLogoWrapper>
        <img src={logo} alt='logo'/>
      </SideLogoWrapper>
      <SocialWrapper>
        <SocialIconsWrapper>
          <SocialIcons to='/'>
            <FaTwitter/>
          </SocialIcons>
          <SocialIcons to='/'>
            <FaGithub/>
          </SocialIcons>
          <SocialIcons to='/'>
            <FaDev/>
          </SocialIcons>
          <SocialIcons to='/'>
            <FaLinkedinIn/>
          </SocialIcons>
        </SocialIconsWrapper>
        <SocialLine/>
      </SocialWrapper>
      
    </SideContainer>
  )
}

export default SideInfo
