import React from "react"
import path from "path"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export const Services = ({ animate }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { in: ["responsive", "api", "server"] } }) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
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
      .basename(node.childImageSharp.fluid.src)
      .replace(".png", "")
    castedImgs[baseName] = { ...node.childImageSharp.fluid }
  })
  return (
    <div id="Services" className="ColorDark1 Container">
      <div className={`col ${animate ? "EnterFromBottom" : "Transparent"}`}>
        <Img alt="responsive" fluid={{ ...castedImgs.responsive }} />
        <h2 className="CenterText SlabBold">EVERY DEVICE</h2>
        <p className="JustifyText">
          With modern Responsive Design techniques your website will be
          accessable by Phones, Tablets, Laptops and WideScreens.
        </p>
      </div>
      <div className={`col ${animate ? "EnterFromBottom" : "Transparent"}`}>
        <Img alt="server" fluid={{ ...castedImgs.server }} />
        <h2 className="CenterText SlabBold">0 TO 100</h2>
        <p className="JustifyText">
          Including domain purchases; I'll be either guiding you and simply
          setting it up for you including server setup to host your site on.
        </p>
      </div>
      <div className={`col ${animate ? "EnterFromBottom" : "Transparent"}`}>
        <Img alt="api" fluid={{ ...castedImgs.api }} />
        <h2 className="CenterText SlabBold">INTEGRATION</h2>
        <p className="JustifyText">
          If you want to have access to changing your content, or need an
          integration with another service. That can and will be done.
        </p>
      </div>
    </div>
  )
}

export default Services
