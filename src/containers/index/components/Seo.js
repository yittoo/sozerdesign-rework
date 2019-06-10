import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Seo = ({animate}) => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "diagram" }) {
        childImageSharp {
          fluid(quality: 70) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div id="Seo" className="Container">
      <div className={`col ${animate ? "FadeIn" : "Transparent"}`}>
        <Img alt="seo graph" fluid={data.file.childImageSharp.fluid} />
      </div>
      <div className={`col ${animate ? "EnterFromRight" : "Transparent"}`}>
        <h2 className="CenterText White SlabBold">
          BETTER TECH BETTER UX <br /> BETTER SEO MORE CLICKS
        </h2>
        <p className="JustifyText WhiteishGreen">
          You have the better tech, it will provide better User Experience (UX),
          your pages will be rendered on server thus Search Engine Crawlers will
          give you the best possible grades on their charts thus providing more
          clicks. You'll get service that can not be obtained with similars of
          WordPress. Which compared to this technology will always be slower.
        </p>
      </div>
    </div>
  )
}

export default Seo
