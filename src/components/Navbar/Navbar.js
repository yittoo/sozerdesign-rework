import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import classes from "./Navbar.module.scss"
import SideDrawer from "./SideDrawer/SideDrawer"

const Navbar = () => {
  let showBurger, toggleBurger
  const [navIsFixed, toggleNav] = useState(false)
  if (typeof document !== `undefined`) {
    ;[showBurger, toggleBurger] = useState(document.body.clientWidth < 960)
  }
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
    <li className={classes.NavItem} key="7">
      <Link to="/#About">ABOUT</Link>
    </li>,
    <li className={classes.NavItem} key="9">
      <Link to="/#Seo">SEO</Link>
    </li>,
    <li className={classes.NavItem} key="0">
      <Link to="/#Services">SERVICES</Link>
    </li>,
    <li className={classes.NavItem} key="1">
      <Link to="/#Portfolio">PORTFOLIO</Link>
    </li>,
    <li className={classes.NavItem} key="2">
      <Link to="/#Contact">CONTACT</Link>
    </li>,
    // <li key="3">CAREER</li>,
    // <li key="4">
    //   <Link to="/blog">BLOG</Link>
    // </li>,
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
    <ul
      className={
        classes.Navbar + " WhiteishGreen " + (navIsFixed ? classes.Fixed : "")
      }
    >
      <li className={classes.Logo + " White SlabBold"}>
        <Link to="/">SozerDesign</Link>
      </li>
      {contentToRender}
    </ul>
  )
}

export default Navbar
