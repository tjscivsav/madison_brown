import React from "react"
import Layout from "../components/Layout/Layout"
import * as productStyle from "../../styles/prodictImg.module.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

function ProductImg({ data }) {
  console.log(data)
  return (
    <>
      {/* <Layout socialLinks={data?.allMarkdownRemark?.edges}>
        <div className={productStyle.products}>
          <div>
            {data?.allFile.edges.map(({ node }) => (
              <Img
                style={{ maxWidth: "1200px" }}
                fluid={node.childImageSharp.fluid}
              />
            ))}
          </div>
        </div>
      </Layout> */}
    </>
  )
}

export default ProductImg

export const productImg_Data = graphql`
  query productImgData {
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
