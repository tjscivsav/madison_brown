import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo"

const NotFoundPage = ({ data }) => (
  <>
    <Seo
      title="Page Not Found"
      description="That page does not exist"
    />
    <Layout socialLinks={data?.allMarkdownRemark?.edges}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </>
)

export default NotFoundPage

export const not_found = graphql`
  query notFound {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            facebook
            instagram
            tiktok
            twitter
          }
        }
      }
    }
  }
`
