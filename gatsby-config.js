const path = require("path")

module.exports = {
  siteMetadata: {
    title: "SozerDesign",
    author: "Yiğit Sözer",
    links: {
      github: "https://github.com/yittoo",
      linkedin: "https://www.linkedin.com/in/yi%C4%9Fit-s%C3%B6zer/",
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 100
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
  ],
}
