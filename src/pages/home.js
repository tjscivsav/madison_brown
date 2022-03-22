import React from "react"
import Layout from "../components/Layout/Layout"
import SlickSlider from "../components/SlickSider"
import shopsData from "../../site/data/shops.json"
import SectionOne from "../components/SectionOne"
import SectionTwo from "../components/SectionTwo"
import SectionThree from "../components/SectionThree"
import productData from "../../site/data/products.json"

function Home() {
  return (
    <Layout>
      <SectionOne />
      <SectionTwo />
      <SectionThree data={productData?.products} />
      <SlickSlider data={shopsData?.shops} />
    </Layout>
  )
}

export default Home
