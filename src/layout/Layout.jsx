import React from 'react'
import Navbars from './Navbar'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
        <Navbars/>
        <main>{children}</main>
    </React.Fragment>
  )
}

export default Layout
