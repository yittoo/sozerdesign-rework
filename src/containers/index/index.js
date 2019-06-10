import React, { useState, useEffect } from "react"

import Seo from "./components/Seo"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"

const IndexContainer = () => {
  const [hasAnimated, setAnimated] = useState({
    Seo: false,
    Services: false,
    Portfolio: false,
    Contact: false,
  })
  const checkIfAnimate = () => {
    const viewportConstant = window.innerHeight * 0.8
    const scrolledDistance = window.scrollY
    const idsArr = Object.keys(hasAnimated).filter(key => !hasAnimated[key])
    idsArr.forEach(id => {
      if (
        scrolledDistance + viewportConstant >
        document.querySelector("#" + id).offsetTop
      ) {
        setAnimated({
          ...hasAnimated,
          [id]: true,
        })
      }
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", checkIfAnimate)
    return () => {
      window.removeEventListener("scroll", checkIfAnimate)
    }
  })
  return (
    <div>
      <Seo animate={hasAnimated.Seo} />
      <Services animate={hasAnimated.Services} />
      <Portfolio animate={hasAnimated.Portfolio} />
      <Contact animate={hasAnimated.Contact} />
    </div>
  )
}

export default IndexContainer
