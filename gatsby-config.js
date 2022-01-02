require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Kwasi Owusu-Donkor`,
    description: `I am a Frontend Software Engineer who endeavours to construct dynamic and beautiful web applications through code that is carefully crafted and user-centeric design.`,
    author: `@kwasidonkor`,
    keywords: `web developer, frontend developer, software engineer, ghana frontend developer, react developer, vue developer, javascript developer`,
    siteUrl: `https://kwasidonkor.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Poppins",
              variants: ["400", "500", "600", "700"],
            },
            {
              family: "Roboto Mono",
              variants: ["400", "600"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `k53nnh8ddz9s`,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kwasi O.Donkor`,
        short_name: `Kwasi O.Donkor`,
        start_url: `/`,
        background_color: `#23263a`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
