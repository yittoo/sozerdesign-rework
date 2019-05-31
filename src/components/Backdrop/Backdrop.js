import React from "react"

import classes from "./Backdrop.module.scss"

const Backdrop = ({ show, clicked, type }) => {
  let backdropClasses = [classes.Backdrop]
  if (type === "cv") backdropClasses.push(classes.DarkBG)
  if (show) backdropClasses.push(classes.Show)
  return <div onClick={clicked} className={backdropClasses.join(" ")} />
}

export default Backdrop
