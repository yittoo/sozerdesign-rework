require("dotenv").config()
const path = require("path")

module.exports = {
  siteMetadata: {
    title: "SozerDesign",
    author: "Yiğit Sözer",
    links: {
      github: "https://github.com/yittoo",
      linkedin: "https://www.linkedin.com/in/yigitsozer",
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 100,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `sz0pabzktgao`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-glslify`,
  ],
}
