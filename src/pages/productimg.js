import React from "react"
import Layout from "../components/Layout/Layout"
import * as productStyle from "../../styles/prodictImg.module.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
function ProductImg() {
  const data = useStaticQuery(graphql`
    query products_img {
      allFile(filter: { relativeDirectory: { eq: "product_img" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <Layout>
        <div className={productStyle.products}>
          <div>
            {data.allFile.edges.map(({ node }) => (
              <Img
                style={{ maxWidth: "1200px" }}
                fluid={node.childImageSharp.fluid}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ProductImg
