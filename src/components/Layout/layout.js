import React from 'react'
import GlobalStyles from './Layout.styles'
import Sidebar from '../Sidebar/Sidebar'
import SideInfo from '../SideInfo/SideInfo'
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
        <img src={circle}/>
      </Circle>
      <Star>
        <img src={star}/>
      </Star>
      <Square>
        <img src={square}/>
      </Square>
      <Triangle>
        <img src={triangle}/>
      </Triangle>
      <SideInfo/>
      <Container>{children}</Container>
      <Sidebar/>
      </LayoutContainer>
    </div>
  )
}

export default Layout
