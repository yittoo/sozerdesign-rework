import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Seo = () => {
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
      <div className="col">
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
      <div className="col">
        <h2 className="CenterText White SlabBold">
          BETTER TECH BETTER UX <br /> BETTER SEO MORE CLICKS
        </h2>
        <p className="JustifyText WhiteishGreen">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorem
          sapiente neque enim architecto earum quos possimus dolores voluptate,
          labore repudiandae, nulla eligendi quasi culpa voluptates suscipit,
          aliquam fuga corporis magnam rem! Cupiditate odit dignissimos nostrum,
          perferendis dolores quae sed!
        </p>
      </div>
    </div>
  )
}

export default Seo
