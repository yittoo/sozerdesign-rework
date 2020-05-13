import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import BackgroundImage from "gatsby-background-image"

import Layout from "../hoc/Layout/Layout"
import Header from "../components/Header/Header"
import IndexContainer from "../containers/index"

import About from "../containers/index/components/About"
import "./index.scss"
import { Hero } from "../containers/Hero/Hero"

const Index = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(name: { eq: "circuitboard" }) {
  //       childImageSharp {
  //         fluid(quality: 100) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `)

  // const imgData = data.file.childImageSharp.fluid
  return (
    <Layout>
      {/* <BackgroundImage fluid={imgData} className="InitialBackground"> */}
      <div className="InitialBackground">
        <Header title="Welcome" />
        <Hero />
      </div>
      {/* </BackgroundImage> */}
      {/* <IndexContainer /> */}
    </Layout>
  )
}

export default Index
