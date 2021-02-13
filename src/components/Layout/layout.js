import React from 'react'
import GlobalStyles from './Layout.styles'
import Sidebar from '../Sidebar/Sidebar'
import SideInfo from '../SideInfo/SideInfo'
import { CopyrightLink, Copyright } from "../../GlobalStyles/GlobalStyles"
import {
  LayoutContainer,
  Container, 
} from './Layout.styles'


const Layout = ({children}) => {
  return (
    <div>
      <GlobalStyles/>
      <LayoutContainer>
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
