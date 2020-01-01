import React from "react"

import Footer from "./Footer/Footer"
import "./Layout.scss"

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <div className="BackgroundPrisms">
        <div className="BackgroundPrism-1" />
        <div className="BackgroundPrism-2" />
        <div className="BackgroundPrism-3" />
      </div>
      <div className="Content">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
