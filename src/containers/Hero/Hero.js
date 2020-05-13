import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import s from "./Hero.module.scss"
import Fake3D from "../../components/Fake3D/Fake3D"
import Image from "../../images/images/workspace-filtered.jpg"
import ImageMap from "../../images/images/workspace-map.jpg"

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "workspace-filtered" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imgData = data.file.childImageSharp.fluid

  return (
    <div>
      <div className={s.HeroContent}>
        <div className={s.Col}>
          <h1>Full Stack Developer</h1>
          <h2>Located in Istanbul</h2>
        </div>
        <div className={s.Col}>
          <h4>You have an idea? Hit me up</h4>
        </div>
      </div>
      <Fake3D imageOriginal={Image} imageMap={ImageMap} />
      <div className={s.BackgroundImage}>
        <Img fluid={{ ...imgData }} />
      </div>
    </div>
  )
}
