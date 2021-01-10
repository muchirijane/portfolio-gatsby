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
          <SocialIcons to='https://twitter.com/TracyCss' target='_blank' rel="noreferrer noopener">
            <FaTwitter/>
          </SocialIcons>
          <SocialIcons to='https://github.com/muchirijane' target='_blank' rel="noreferrer noopener">
            <FaGithub/>
          </SocialIcons>
          <SocialIcons to='https://dev.to/tracycss' target='_blank' rel="noreferrer noopener">
            <FaDev/>
          </SocialIcons>
          <SocialIcons to='https://www.linkedin.com/in/jane-muthoni-muchiri/' target='_blank' rel="noreferrer noopener">
            <FaLinkedinIn/>
          </SocialIcons>
        </SocialIconsWrapper>
        <SocialLine/>
      </SocialWrapper>
      
    </SideContainer>
  )
}

export default SideInfo
