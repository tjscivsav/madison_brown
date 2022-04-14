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
  return (
    <Layout socialLinks={data?.allMarkdownRemark?.edges}>
      <Popup
        open={open}
        opened={() => {
          setOpen(!open)
        }}
      />
      <SectionOne />
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

export const Social_Links = graphql`
  query SocialLinks {
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
