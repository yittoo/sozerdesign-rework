import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Layout from "../hoc/Layout/Layout"
import Header from "../components/Header/Header"
import HireMe from "../components/HireMeBanner/HireMe"
import IndexContainer from "../containers/index"

import Helmet from "../components/HelmetGenerator/HelmetGenerator"
import About from "../containers/index/components/About"
import "./index.scss"
import CV from "../components/CV/CV"

const Index = () => {
  const [showCV, toggleCV] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "circuitboard" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const toggleCvHandler = () => {
    toggleCV(!showCV)
  }
  const imgData = data.file.childImageSharp.fluid
  return (
    <Layout>
      <Helmet title="Welcome" />
      <BackgroundImage fluid={imgData} className="InitialBackground">
        <HireMe onToggleCV={toggleCvHandler} />
        <Header />
        <About />
      </BackgroundImage>
      <IndexContainer />
      <CV show={showCV} onToggleCV={toggleCvHandler} />
    </Layout>
  )
}

export default Index
