import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { in: ["stethoscope", "wall-clock"] } }) {
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
  return (
    <div id="Portfolio" className="Container">
      {/* <h2 className="CenterText White SlabBold">PORTFOLIO</h2> */}
      {/* <div className="Flex Flex-3">
        <div className="col-3 Placeholder">PLACEHOLDER</div>
        <div className="col-3 Placeholder">PLACEHOLDER</div>
        <div className="col-3 Placeholder">PLACEHOLDER</div>
      </div> */}
      <h3 className="CenterText White SlabBold">OWN PROJECTS</h3>
      <p className="JustifyText WhiteishGreen">
        Apart from freelancing I spend my time building my own side projects.
      </p>
      <div className="Flex Flex-2">
        <div className="col-2 Image">
          <Img alt="clock" fluid={{ ...data.allFile.nodes[1].childImageSharp.fluid }} />
        </div>
        <div className="col-2">
          <h3 className="CenterText White SlabBold">Boss Time Tracker:</h3>
          <p className="JustifyText WhiteishGreen">
            For a game called Ragnarok Online. Players are capable of
            registering and using this service free of charge through{" "}
            <a
              target="_blank"
              href="https://mvp-ro.com"
              rel="noopener noreferrer"
            >
              "this site"
            </a>
            . This site is React / Redux driven web app built with Serverless
            Architecture and is currently serving 200 monthly active users with
            its’ extensive functionalities.
          </p>
        </div>
      </div>
      <div className="Flex Flex-2 FlexOpposite">
        <div className="col-2">
          <h3 className="CenterText White SlabBold">
            Medical Information Site:
          </h3>
          <p className="JustifyText WhiteishGreen">
            Still in progress, a site that allows medical personel to share
            information about diseases, symptoms, treatments over web by forming
            connection between each for Turkish Public to see. Also allows
            medical personel to share articles thus creating a professional
            social network where public can be informed. Alpha version demo is
            available at{" "}
            <a
              target="_blank"
              href="https://obscure-lowlands-21426.herokuapp.com/"
              rel="noopener noreferrer"
            >
              "Heroku Demo"
            </a>
          </p>
        </div>
        <div className="col-2 Image">
          <Img alt="stetescope" fluid={{ ...data.allFile.nodes[0].childImageSharp.fluid }} />
        </div>
      </div>
    </div>
  )
}

export default Portfolio
