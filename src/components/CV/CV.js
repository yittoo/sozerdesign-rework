import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Backdrop from "../Backdrop/Backdrop";

const CV = ({show, onToggleCV}) => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "CV" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div id="CV" className={show ? "Show" : null}>
      <Img fluid={data.file.childImageSharp.fluid} />
      <Backdrop clicked={onToggleCV} show={show} type="cv" />
    </div>
  )
}

export default CV
