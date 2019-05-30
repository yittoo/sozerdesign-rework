import React from "react"

import classes from "./Backdrop.module.scss"

const Backdrop = ({ show, clicked }) => {
  let backdropClasses = [classes.Backdrop]
  if (show) backdropClasses.push(classes.Show)
  return <div onClick={clicked} className={backdropClasses.join(" ")} />
}

export default Backdrop
