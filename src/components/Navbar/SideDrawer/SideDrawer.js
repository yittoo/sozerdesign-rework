import React from "react"

import classes from "./SideDrawer.module.scss"
import Backdrop from "../../Backdrop/Backdrop"

const SideDrawer = ({ items, show, clicked }) => {
  let sidedrawerClasses = [classes.SideDrawer]
  if (show) sidedrawerClasses.push(classes.Show)
  return (
    <div className={sidedrawerClasses.join(" ")}>
      <ul>{items ? items.map(item => item) : null}</ul>
      <Backdrop clicked={clicked} show={show} type="sidedrawer" />
    </div>
  )
}

export default SideDrawer
