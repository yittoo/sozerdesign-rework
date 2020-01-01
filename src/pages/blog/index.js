import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../../hoc/Layout/Layout"
import Header from "../../components/Header/Header"
import "./index.scss"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            slug
            date(formatString: "DD.MM.YYYY")
            content {
              json
            }
          }
        }
      }
    }
  `)

  const dataToRender = data.allContentfulPost.edges.map(edge => {
    const { title, date, slug, content } = edge.node
    return (
      <li className="Post" key={slug}>
        <Link to={`/blog/${slug}`}>
          <h2>{title}</h2>
        </Link>
        <p className="Date">{date}</p>
        <p className="Content">
          {content.json.content[0].content[0].value.slice(0, 220)}...
          <Link to={`/blog/${slug}`}> Read More</Link>
        </p>
      </li>
    )
  })
  return (
    <Layout>
      <Header title="Blog" />
      <ul className="Posts">{dataToRender}</ul>
    </Layout>
  )
}

export default Blog
