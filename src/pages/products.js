import React, { useState } from "react"
import Layout from "../components/Layout/Layout"
import PageTitle from "../components/PageTitle"
import Product from "../components/Product"
import productData from "../../site/data/products.json"
import Popup from "../components/Popup"
import { graphql } from "gatsby"

function Products({ data }) {
  const [open, setOpen] = useState(false)
  let product_Data
  data?.allMarkdownRemark?.edges?.map(item => {
    if (item?.node?.id === "0f637dd7-58e9-5009-9e24-81e116539f92") {
      product_Data = item?.node?.frontmatter?.products
    }
  })
  return (
    <Layout socialLinks={data?.allMarkdownRemark?.edges}>
      <Popup
        open={open}
        opened={() => {
          setOpen(!open)
        }}
      />
      <PageTitle title="Products" />
      <div className={`container-fluid  bg_sandal`}>
        <div className="row">
          <Product
            opened={opened => {
              setOpen(opened)
            }}
            data={product_Data || productData?.products}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Products

export const products_Data = graphql`
  query productsData {
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
              frame
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
