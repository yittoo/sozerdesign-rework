import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import classes from "./Navbar.module.scss"
import SideDrawer from "./SideDrawer/SideDrawer"

const Navbar = props => {
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
    <li className={classes.NavItem} key="1">
      <Link to="/">About</Link>
    </li>,

    <li className={classes.NavItem} key="2">
      <Link to="/blog">Blog</Link>
    </li>,
    <li className={classes.NavItem} key="3">
      <a
        href="https://www.linkedin.com/in/yigitsozer/"
        rel="noreferrer noopener"
        target="_blank"
      >
        LinkedIn
      </a>
    </li>,
    <li className={classes.NavItem} key="4">
      <a
        href="https://github.com/yittoo"
        rel="noreferrer noopener"
        target="_blank"
      >
        GitHub
      </a>
    </li>,
    <li className={classes.NavItem} key="5">
      <div onClick={props.onToggleCV}>CV</div>
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
    <ul
      className={
        classes.Navbar + " ColorWhite1 " + (navIsFixed ? classes.Fixed : "")
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
