import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"

function SEO({ description, title, slug }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )
  return (
    <>
      <div>
        <Helmet
          htmlAttributes={{
            lang: "en",
          }}
          title={title}
          defaultTitle={site.siteMetadata.title}
          meta={[
            {
              property: `description`,
              content:
                "Ice cream tastes good because it contains a good amount of fat and flavourings.",
            },
          ]}
        ></Helmet>
      </div>
    </>
  )
}

export default SEO
