import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import "../Layout.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata

  return (
    <div className="Footer ColorWhite1 ">
      Copyright © 2019{" "}
      {new Date().getFullYear() !== 2019
        ? "- " + new Date().getFullYear()
        : null}{" "}
      {title}. All Rights Reserved.
    </div>
  )
}

export default Footer
