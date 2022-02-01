/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://madisonbrownicecream.us14.list-manage.com/subscribe/post?u=cc8239a65f07d2b1871ac509f&amp;id=a2d5a9b530",
        timeout: 3500,
      },
    },
  ],
}
