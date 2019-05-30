import React from "react"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const HelmetGenerator = (props) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  const { siteMetadata } = data.site

  return (
    <Helmet title={`${siteMetadata.title} | ${props.title}`}>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Slab|Roboto:300,400&display=swap"
        rel="stylesheet"
      />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="author" content={siteMetadata.author} />
    </Helmet>
  )
}

export default HelmetGenerator
