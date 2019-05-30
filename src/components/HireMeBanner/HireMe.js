import React from "react"
import classes from "./HireMe.module.scss"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const HireMe = () => {
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
  const imagesToRender = data.allFile.nodes.map((node, index) => {
    return <Img key={index} fixed={node.childImageSharp.fixed} />
  })
  return (
    <div className={classes.HireMe + " DarkGreenBg PaleGreen"}>
      <p>Are you from HR and like my work? Hire me fulltime</p>
      <div className={classes.ContactIcons}>{imagesToRender}</div>
    </div>
  )
}
export default HireMe
