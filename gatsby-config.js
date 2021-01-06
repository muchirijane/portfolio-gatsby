module.exports = {
  siteMetadata: {
    title: `Jane | Front-end Developer`,
    description: `I am Jane Tracy Muthoni, a self-taught developer.`,
    author: `Jane Tracy Muthoni`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        pathPrefix: "/portfolio-gatsby",
        name: `Jane | Front-end Developer`,
        short_name: `Jane`,
        start_url: `/`,
        background_color: `#1B1B29`,
        theme_color: `#DBDBDB`,
        display: `minimal-ui`,
        icon: `src/images/logo-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
