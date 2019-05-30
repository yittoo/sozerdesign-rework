import React from "react"

import Footer from "./Footer/Footer"
import "./Layout.scss"

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <div className="Content">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
