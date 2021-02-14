module.exports = {
  siteMetadata: {
    title: `Jane | Front-end Developer`,
    description: `I am Jane Tracy Muthoni, a self-taught Front-end developer.`,
    author: `Jane Tracy Muthoni`,
    siteUrl: 'https://janetracy.com',
    social: {
      twitter: 'TracyCss',
      linkedin: 'janetracymuthoni',
      github: 'janetracymuthoni',
      devto: 'tracycss',
      email: 'muchirijane@outlook.com'
    },
    // name of the image for social website share, should be in static folder
    imageShare: `share.jpg`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/posts`,
      },
    },
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        pathPrefix: "/portfolio-gatsby",
        name: `Jane | Front-end Developer`,
        short_name: `Jane`,
        start_url: `/`,
        background_color: `#1B1B29`,
        theme_color: `#EAEAEA`,
        display: `minimal-ui`,
        icon: `src/images/logo-icon.png`, 
      },
    },
    `gatsby-plugin-offline`,
  ],
}
