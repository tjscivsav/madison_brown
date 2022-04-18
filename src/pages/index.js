import React, { useState } from "react"
import Layout from "../components/Layout/Layout"
import SlickSlider from "../components/SlickSider"
import shopsData from "../../site/data/shops.json"
import SectionOne from "../components/SectionOne"
import SectionTwo from "../components/SectionTwo"
import SectionThree from "../components/SectionThree"
import Poster from "../components/Poster"
import SectionFive from "../components/SectionFive.js"
import productData from "../../site/data/products.json"
import Popup from "../components/Popup"
import { graphql } from "gatsby"

function Home({ data }) {
  console.log(data)
  const [open, setOpen] = useState(false)
  let sectionOneData
  let product_Data
  let poster_Data
  let shop_list
  let social_links
  data?.allMarkdownRemark?.edges?.map(item => {
    if (item?.node?.id === "c3c0c32f-9caf-5006-a84f-5db71c5fe6b0") {
      social_links = {
        instagram: item?.node?.frontmatter?.instagram,
        facebook: item?.node?.frontmatter?.facebook,
        tiktok: item?.node?.frontmatter?.tiktok,
        twitter: item?.node?.frontmatter?.twitter,
      }
    }
    if (item?.node?.id === "20ac4b4e-cb02-5c68-b9b9-d8eeaf4a62cc") {
      shop_list = item?.node?.frontmatter?.shops
    }
    if (item?.node?.id === "0f637dd7-58e9-5009-9e24-81e116539f92") {
      product_Data = item?.node?.frontmatter?.products
    }
    if (item?.node?.id === "94cec0e5-f9e1-5864-928f-5ae9fd79d851") {
      sectionOneData = {
        title: item?.node?.frontmatter?.title,
        desc: item?.node?.frontmatter?.desc,
        bg_img: item?.node?.frontmatter?.bg_img,
        front_img: item?.node?.frontmatter?.front_img,
      }
      poster_Data = {
        title: item?.node?.frontmatter?.poster_title,
      }
    }
  })
  return (
    <Layout socialLinks={social_links}>
      <Popup
        open={open}
        opened={() => {
          setOpen(!open)
        }}
      />
      <SectionOne data={sectionOneData} />
      <SectionTwo />
      <SectionThree
        data={product_Data ? product_Data : productData?.products}
      />
      <Poster data={poster_Data} />
      <SlickSlider data={shop_list ? shop_list : shopsData?.shops} />
      <SectionFive
        opened={opened => {
          setOpen(opened)
        }}
      />
    </Layout>
  )
}

export default Home

export const Index_Data = graphql`
  query IndexData {
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
