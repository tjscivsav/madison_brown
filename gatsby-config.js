/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Madison Brown`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://madisonbrownicecream.us14.list-manage.com/subscribe/post?u=cc8239a65f07d2b1871ac509f&amp;id=a2d5a9b530",
        timeout: 3500,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Madison Brown Ice Cream",
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./static/favicon.png`, // This path is relative to the root of the site.
        cache_busting_mode: `none`,
      },
    },
  ],
}
