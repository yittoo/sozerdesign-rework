import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import path from "path"
import Img from "gatsby-image"

import classes from "./HireMe.module.scss"

const HireMe = ({ onToggleCV }) => {
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
      <a
        href="https://www.linkedin.com/in/yi%C4%9Fit-s%C3%B6zer/"
        rel="noreferrer noopener"
        target="_blank"
      >
        <Img alt="linkedin" fixed={{ ...castedImgs["linkedin"] }} />
      </a>
      <a
        href="https://github.com/yittoo"
        rel="noreferrer noopener"
        target="_blank"
      >
        <Img alt="github" fixed={{ ...castedImgs["github"] }} />
      </a>
      <div onClick={onToggleCV}>
        <Img key={0} alt="cv" fixed={{ ...castedImgs["cv"] }} />
      </div>
    </div>
  )
  return (
    <div className={classes.HireMe + " PrimaryColorBg ColorWhite1"}>
      <p>Want to contact me? Here is my information</p>
      {imgToRender}
    </div>
  )
}
export default HireMe
