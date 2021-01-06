import React from 'react'
import PropTypes from "prop-types"
import GlobalStyles from './Layout.styles'


const Layout = ({children}) => {
  return (
    <div>
      <GlobalStyles/>
      {children}
    </div>
  )
}

export default Layout
