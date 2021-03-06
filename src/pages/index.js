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
import InstaFeed from "../components/InstaFeed"
import Seo from "../components/Seo"

function Home() {
  let md_Data = useStaticQuery(graphql`
    query md_Data {
      home: allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              templateKey
              email {
                email_id
              }
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
              poster_btn_name
              poster_btn_link
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
      seo: allMarkdownRemark (filter: {fileAbsolutePath: {glob: "**/home.md"}}) {
          edges {
            node {
              id
              frontmatter {
                seoTitle
                seoDescription
              }
            }
          }
        }
    }
  `)
  const [open, setOpen] = useState(false)
  
  const SEOData = md_Data.seo.edges[0].node.frontmatter

  md_Data = {allMarkdownRemark: md_Data.home}
  
  let product_Data = _.find(md_Data?.allMarkdownRemark?.edges, function (item) {
    if (item?.node?.frontmatter?.templateKey === "products") {
      return item?.node
    }
  })
  let social_links = _.find(md_Data?.allMarkdownRemark?.edges, function (item) {
    if (item?.node?.frontmatter?.templateKey === "socialLinks") {
      return item?.node
    }
  })
  let shop_list = _.find(md_Data?.allMarkdownRemark?.edges, function (item) {
    if (item?.node?.frontmatter?.templateKey === "shops") {
      return item?.node
    }
  })
  let home_Data = _.find(md_Data?.allMarkdownRemark?.edges, function (item) {
    if (item?.node?.frontmatter?.templateKey === "home") {
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
    poster_btn_name: home_Data?.node?.frontmatter?.poster_btn_name,
    poster_btn_link: home_Data?.node?.frontmatter?.poster_btn_link,
  }


  return (
    <>
      <Seo
        title={SEOData?.seoTitle ? SEOData.seoTitle : "Home"}
        description={SEOData?.seoDescription ? SEOData.seoDescription : "Madison Brown Home Page"}
      />
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
        {/* <SlickSlider
          data={
            shop_list?.node?.frontmatter?.shops
              ? shop_list?.node?.frontmatter?.shops
              : shopsData?.shops
          }
        /> */}
        <SectionFive
          opened={opened => {
            setOpen(opened)
          }}
        />

        <InstaFeed />
      </Layout>
    </>
  )
}

export default Home
