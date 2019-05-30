import React from "react"
import path from "path"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export const Services = () => {
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
    <div id="Services" className="BlackishGray Container">
      <div className="col">
        <Img fluid={{ ...castedImgs.responsive }} />
        <h2 className="CenterText SlabBold">EVERY DEVICE</h2>
        <p className="JustifyText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum alias
          vitae numquam quas hic, animi eligendi aliquam ut omnis nesciunt!
        </p>
      </div>
      <div className="col">
        <Img fluid={{ ...castedImgs.server }} />
        <h2 className="CenterText SlabBold">0 TO 100</h2>
        <p className="JustifyText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum alias
          vitae numquam quas hic, animi eligendi aliquam ut omnis nesciunt!
        </p>
      </div>
      <div className="col">
        <Img fluid={{ ...castedImgs.api }} />
        <h2 className="CenterText SlabBold">API INTEGRATION</h2>
        <p className="JustifyText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum alias
          vitae numquam quas hic, animi eligendi aliquam ut omnis nesciunt!
        </p>
      </div>
    </div>
  )
}

export default Services
