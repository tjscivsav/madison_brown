import React from "react"
import ImageBox from "../components/ImageBox"
import Layout from "../components/Layout/Layout"
import PageTitle from "../components/PageTitle"
import local_data from "../../site/data/press.json"
import { graphql } from "gatsby"
function press({ data }) {
  return (
    <Layout socialLinks={data?.allMarkdownRemark?.edges}>
      <PageTitle title="Press" />
      <div
        style={{ paddingBottom: "8rem" }}
        className="container-fluid bg_sandal"
      >
        <ImageBox data={local_data?.press} />
      </div>
    </Layout>
  )
}

export default press

export const press_Data = graphql`
  query pressData {
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
