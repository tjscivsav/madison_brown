module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Madison Brown`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    `gatsby-plugin-graphql-config`,
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
        display: `minimal-ui`,
        icon: `./src/images/favicon.png`,
        cache_busting_mode: `none`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./static/img",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./site/",
      },
      __key: "content",
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token:
          "IGQVJYVGFHSFMyZAUpJMklQVU1vNkFVeDdQLXljX0JOa21abHNDU25RcmE5SFk1UTRyNTlmanR1VHBZAY2haa2JLSURyc3N0UzlSdG9PME8zempFYnRxTFI2b3dqc0h5dW1FcndQLVJzcUJ5U3dsZAFVZANgZDZD",
      },
    },
  ],
}
