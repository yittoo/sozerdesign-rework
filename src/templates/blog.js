import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../hoc/Layout/Layout"
import Header from "../components/Header/Header"
import "../pages/blog/index.scss"

export const query = graphql`
  query contentfulPost($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      date(formatString: "DD.MM.YYYY")
      content {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const { fields } = node.data.target
        if (fields) {
          const alt = fields.title["en-US"],
            url = fields.file["en-US"].url
          return <img src={url} alt={alt} />
        }
      },
      hyperlink: node => {
        const { uri } = node.data
        const { value } = node.content[0]
        if (uri) {
          return (
            <a rel="noopener noreferrer" href={uri}>
              {value}
            </a>
          )
        }
      },
    },
  }
  const { title, date, content } = props.data.contentfulPost
  console.log(content.json)
  const blogBody = documentToReactComponents(content.json, options)
  return (
    <Layout>
      <Header title={title} />
      <section className="Post">
        <h2>{title}</h2>
        <p className="Date">{date}</p>
        <div className="Content">{blogBody}</div>
      </section>
    </Layout>
  )
}

export default Blog
