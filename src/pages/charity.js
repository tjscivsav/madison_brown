import React from "react"
import Layout from "../components/Layout/Layout"
import PageTitle from "../components/PageTitle"
import local_data from "../../site/data/charities.json"
import ImageBox from "../components/ImageBox"
import { graphql } from "gatsby"
import Seo from "../components/Seo"

function charity({ data }) {
  return (
    <>
      <Seo
        title="Charity"
        description="Charity"
      />
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
    </>
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
            instagram
            facebook
            tiktok
            twitter
            bg_img
            desc
            front_img
            seoTitle
            title
            para1
            para2
            poster_title
            products {
              btn_color
              desc
              id
              img
              title
            }
            shops {
              img
              location
              upcoming
            }
          }
        }
      }
    }
  }
`
