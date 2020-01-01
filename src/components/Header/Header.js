import React, { useState } from "react"
import Navbar from "../Navbar/Navbar"

import HireMe from "../HireMeBanner/HireMe"
import CV from "../CV/CV"
import Helmet from "../HelmetGenerator/HelmetGenerator"

const Header = ({ title }) => {
  const [showCV, toggleCV] = useState(false)

  const toggleCvHandler = () => {
    toggleCV(!showCV)
  }
  return (
    <React.Fragment>
      <Helmet title={title} />
      <HireMe onToggleCV={toggleCvHandler} />
      <Navbar />
      <CV show={showCV} onToggleCV={toggleCvHandler} />
    </React.Fragment>
  )
}

export default Header
