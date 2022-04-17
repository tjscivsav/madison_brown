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
  const [open, setOpen] = useState(false)
  const sectionOneData = {
    title: data?.allMarkdownRemark?.edges[1]?.node?.frontmatter?.title,
    desc: data?.allMarkdownRemark?.edges[1]?.node?.frontmatter?.desc,
    bg_img: data?.allMarkdownRemark?.edges[1]?.node?.frontmatter?.bg_img,
    front_img: data?.allMarkdownRemark?.edges[1]?.node?.frontmatter?.front_img,
  }
  return (
    <Layout socialLinks={data?.allMarkdownRemark?.edges}>
      <Popup
        open={open}
        opened={() => {
          setOpen(!open)
        }}
      />
      <SectionOne data={sectionOneData} />
      <SectionTwo />
      <SectionThree data={productData?.products} />
      <Poster />
      <SlickSlider data={shopsData?.shops} />
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
            facebook
            instagram
            tiktok
            title
            twitter
            bg_img
            desc
            front_img
            poster_title
            seoTitle
          }
        }
      }
    }
  }
`
