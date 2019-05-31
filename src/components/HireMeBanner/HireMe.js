import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import path from "path"
import Img from "gatsby-image"

import classes from "./HireMe.module.scss"

const HireMe = ({onToggleCV}) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { in: ["linkedin", "cv", "github"] } }) {
        nodes {
          childImageSharp {
            fixed(width: 40, height: 40) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)
  const { nodes } = data.allFile
  let castedImgs = {}
  nodes.forEach(node => {
    const baseName = path
      .basename(node.childImageSharp.fixed.src)
      .replace(".png", "")
    castedImgs[baseName] = { ...node.childImageSharp.fixed }
  })
  const imgToRender = (
    <div className={classes.ContactIcons}>
      <a href="https://www.linkedin.com/in/yi%C4%9Fit-s%C3%B6zer/" rel="noreferrer noopener" target="_blank"><Img fixed={{...castedImgs["linkedin"]}} /></a>
      <a href="https://github.com/yittoo" rel="noreferrer noopener" target="_blank"><Img fixed={{...castedImgs["github"]}} /></a>
      <div onClick={onToggleCV}><Img key={0} fixed={{...castedImgs["cv"]}} /></div>
    </div>
  )
  return (
    <div className={classes.HireMe + " DarkGreenBg PaleGreen"}>
      <p>Are you from HR and like my work? Hire me fulltime</p>
      {imgToRender}
    </div>
  )
}
export default HireMe
