import React from 'react'
import SideLogo from './SideLogo'
import {
  SideContainer,
  SideLogoWrapper,
  SocialWrapper,
  SocialIcons,
  SocialTwitter,
  SocialGithub,
  SocialDev,
  SocialLinkedin,
  SocialLine
} from './SideInfo.styles'
const SideInfo = () => {
  return (
    <SideContainer>
      <SideLogoWrapper>
        <SideLogo/>
      </SideLogoWrapper>
      <SocialWrapper>
        <SocialIcons>
          <SocialTwitter/>
          <SocialGithub/>
          <SocialDev/>
          <SocialLinkedin/>
        </SocialIcons>
        <SocialLine/>
      </SocialWrapper>
      
    </SideContainer>
  )
}

export default SideInfo
