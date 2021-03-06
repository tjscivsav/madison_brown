import React, { useState } from "react"
import Layout from "../components/Layout/Layout"
import PageTitle from "../components/PageTitle"
import Product from "../components/Product"
import productData from "../../site/data/products.json"
import Popup from "../components/Popup"
import { graphql } from "gatsby"
import _ from "lodash"
import Seo from "../components/Seo"

export const products_Data = graphql`
query productsData {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          templateKey
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
          poster_btn_link
          poster_btn_name
          products {
            btn_color
            desc
            id
            img
            title
            frame
            galleryContent {
              galleryImage {
                childImageSharp {
                  gatsbyImageData
                }
              }          
            }
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

function Products({ data }) {
  const [open, setOpen] = useState(false)
  let product_Data = _.find(data?.allMarkdownRemark?.edges, function (item) {
    if (item?.node?.frontmatter?.templateKey === "products") {
      return item?.node
    }
  })
  let social_links = _.find(data?.allMarkdownRemark?.edges, function (item) {
    if (item?.node?.frontmatter?.templateKey === "socialLinks") {
      return item?.node
    }
  })

  let popup_data = _.find(data?.allMarkdownRemark?.edges, function (item) {
    if (item?.node?.frontmatter?.templateKey === "home") {
      return item?.node
    }
  })

  return (
    <>
      <Seo
        title="Products"
        description="Products"
      />
      <Layout socialLinks={social_links?.node?.frontmatter}>
        <Popup open={open} opened={setOpen} data={popup_data} />
        <PageTitle title="Products" />
        <div className={`container-fluid  bg_sandal`}>
          <div className="row">
            <Product
              setOpen={setOpen}
              data={
                product_Data?.node?.frontmatter?.products
                  ? product_Data?.node?.frontmatter?.products
                  : productData?.products
              }
            />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Products
