import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import classes from "./Navbar.module.scss"
import SideDrawer from "./SideDrawer/SideDrawer"

const Navbar = () => {
  const [navIsFixed, toggleNav] = useState(false)
  const [showBurger, toggleBurger] = useState(document.body.clientWidth < 960)
  const [showSideDrawer, toggleSideDrawer] = useState(false)

  const checkBurger = () => {
    if (document.body.clientWidth < 960) {
      toggleBurger(true)
    } else {
      toggleBurger(false)
    }
  }
  const scrollHandler = () => {
    if (window.scrollY > 125) {
      toggleNav(true)
    } else {
      toggleNav(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler)
    window.addEventListener("resize", checkBurger)
    return () => {
      window.removeEventListener("scroll", scrollHandler)
      window.removeEventListener("resize", checkBurger)
    }
  })

  const burgerBtn = (
    <div
      className={classes.Burger}
      onClick={() => toggleSideDrawer(!showSideDrawer)}
    >
      <div />
      <div />
      <div />
    </div>
  )

  const navItems = [
    <li key="0">SERVICES</li>,
    <li key="1">PORTFOLIO</li>,
    <li key="2">CONTACT</li>,
    <li key="3">CAREER</li>,
    <li key="4">
      <Link to="/blog">BLOG</Link>
    </li>,
  ]

  const contentToRender = showBurger ? (
    <React.Fragment>
      {burgerBtn}
      <SideDrawer
        items={navItems}
        clicked={() => toggleSideDrawer(!showSideDrawer)}
        show={showSideDrawer}
      />
    </React.Fragment>
  ) : (
    navItems.map(item => item)
  )

  return (
    <div className="Container">
      <ul
        className={
          classes.Navbar + " WhiteishGreen " + (navIsFixed ? classes.Fixed : "")
        }
      >
        <span className={classes.Logo + " White SlabBold"}>
          <Link to="/">SozerDesign</Link>
        </span>
        {contentToRender}
      </ul>
    </div>
  )
}

export default Navbar
