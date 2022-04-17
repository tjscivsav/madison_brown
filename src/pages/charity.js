import React from "react"
import Layout from "../components/Layout/Layout"
import PageTitle from "../components/PageTitle"
import local_data from "../../site/data/charities.json"
import ImageBox from "../components/ImageBox"
import { graphql } from "gatsby"

function charity({ data }) {
  return (
    <Layout socialLinks={data?.allMarkdownRemark?.edges}>
      <PageTitle title="Charity" />
      <div
        style={{ paddingBottom: "8rem" }}
        className="container-fluid bg_sandal"
      >
        <div className="page_header">All Charities</div>
        <ImageBox data={local_data?.charities} />
      </div>
    </Layout>
  )
}

export default charity

export const charity_Data = graphql`
  query CharityData {
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
