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
      <html lang="en" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Slab|Roboto:300,400&display=swap"
        rel="stylesheet"
        async
      />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="author" content={siteMetadata.author} />
      <meta name="description" content="Portfolio Site of Freelance Full Stack Web Developer using React, Node, GraphQL" />
      <meta name="keywords" content="FullStack, FrontEnd, Developer, Web, React, Node, Design, Code, Freelance"></meta>
      <meta property="og:title" content="SozerDesign | FullStack Web Developer"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://sozerdesign.com"></meta>
      <meta property="og:description" content="Portfolio Site of Freelance Full Stack Web Developer using React, Node, GraphQL"></meta>
      <meta property="og:image" content="https://avatars2.githubusercontent.com/u/33281801?s=460&v=4"></meta>
    </Helmet>
  )
}

export default HelmetGenerator
