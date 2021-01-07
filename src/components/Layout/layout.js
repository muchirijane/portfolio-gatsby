import React from 'react'
import GlobalStyles from './Layout.styles'
import Sidebar from '../Sidebar/Sidebar'
import SideInfo from '../SideInfo/SideInfo'
import {LayoutContainer} from './Layout.styles'


const Layout = ({children}) => {
  return (
    <div>
      <GlobalStyles/>
      <LayoutContainer>
      <SideInfo/>
      {children}
      <Sidebar/>
      </LayoutContainer>
    </div>
  )
}

export default Layout
