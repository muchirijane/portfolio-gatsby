import React from 'react'
import GlobalStyles from './Layout.styles'
import Sidebar from '../Sidebar/Sidebar'
import SideInfo from '../SideInfo/SideInfo'
import { CopyrightLink, Copyright } from "../../GlobalStyles/GlobalStyles"
import {
  LayoutContainer,
  Container, 
  Circle,
  Star,
  Triangle,
  Square,
} from './Layout.styles'

import circle from '../../images/Ellipse.svg'
import star from '../../images/star.svg'
import square from '../../images/square.svg'
import triangle from '../../images/Polygon.svg'


const Layout = ({children}) => {
  return (
    <div>
      <GlobalStyles/>
      <LayoutContainer>
      <Circle>
        <img src={circle} alt='A circle'/>
      </Circle>
      <Star>
        <img src={star} alt='A star'/>
      </Star>
      <Square>
        <img src={square} alt='A square'/>
      </Square>
      <Triangle>
        <img src={triangle} alt='A triangle'/>
      </Triangle>
      <SideInfo/>
      <Container>{children}
      <Copyright>
          Designed and built by 
          <CopyrightLink to ='https://github.com/muchirijane'>&copy; Jane Tracy {new Date().getFullYear()}</CopyrightLink>
        </Copyright>
      </Container>
      <Sidebar/>
      </LayoutContainer>
    </div>
  )
}

export default Layout
