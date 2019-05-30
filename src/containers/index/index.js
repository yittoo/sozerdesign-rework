import React from "react"

import Seo from "./components/Seo"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"

const IndexContainer = () => {
  return (
    <div>
      <Seo />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default IndexContainer
