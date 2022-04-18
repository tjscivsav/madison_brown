import React, { useState } from "react"
import _ from "lodash"
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
import { graphql, useStaticQuery } from "gatsby"

function Home() {
  const md_Data = useStaticQuery(graphql`
    query md_Data {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              email {
                email_id
              }
              instagram
              facebook
              tiktok
              twitter
              seoTitle
            }
          }
        }
      }
    }
  `)
  console.log(md_Data)
  const [open, setOpen] = useState(false)
  let product_Data = _.find(md_Data?.allMarkdownRemark?.edges, function (item) {
    if (
      item?.node?.id === "0f637dd7-58e9-5009-9e24-81e116539f92" ||
      item?.node?.id === "e628fe81-6e8e-535b-8955-45804124fc88"
    ) {
      return item?.node
    }
  })
  let social_links = _.find(md_Data?.allMarkdownRemark?.edges, function (item) {
    if (
      item?.node?.id === "c3c0c32f-9caf-5006-a84f-5db71c5fe6b0" ||
      item?.node?.id === "f410484c-206d-58cc-8915-ba3ff0672103"
    ) {
      return item?.node
    }
  })
  let shop_list = _.find(md_Data?.allMarkdownRemark?.edges, function (item) {
    if (
      item?.node?.id === "20ac4b4e-cb02-5c68-b9b9-d8eeaf4a62cc" ||
      item?.node?.id === "39b895ad-ee58-59f5-afe0-c33251f92a2a"
    ) {
      return item?.node
    }
  })
  let home_Data = _.find(md_Data?.allMarkdownRemark?.edges, function (item) {
    if (
      item?.node?.id === "94cec0e5-f9e1-5864-928f-5ae9fd79d851" ||
      item?.node?.id === "f4a655fc-1b75-5a09-a968-abe2244a0d24"
    ) {
      return item?.node
    }
  })
  let sectionOneData = {
    title: home_Data?.node?.frontmatter?.title,
    desc: home_Data?.node?.frontmatter?.desc,
    bg_img: home_Data?.node?.frontmatter?.bg_img,
    front_img: home_Data?.node?.frontmatter?.front_img,
  }
  let poster_Data = {
    title: home_Data?.node?.frontmatter?.poster_title,
  }

  return (
    <Layout socialLinks={social_links?.node?.frontmatter}>
      <Popup
        open={open}
        opened={() => {
          setOpen(!open)
        }}
      />
      <SectionOne data={sectionOneData} />
      <SectionTwo />
      <SectionThree
        data={
          product_Data?.node?.frontmatter?.products
            ? product_Data?.node?.frontmatter?.products
            : productData?.products
        }
      />
      <Poster data={poster_Data} />
      <SlickSlider
        data={
          shop_list?.node?.frontmatter?.shops
            ? shop_list?.node?.frontmatter?.shops
            : shopsData?.shops
        }
      />
      <SectionFive
        opened={opened => {
          setOpen(opened)
        }}
      />
    </Layout>
  )
}

export default Home
