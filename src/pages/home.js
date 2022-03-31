import React from "react"
import Layout from "../components/Layout/Layout"
import SlickSlider from "../components/SlickSider"
import shopsData from "../../site/data/shops.json"
import SectionOne from "../components/SectionOne"
import SectionTwo from "../components/SectionTwo"
import SectionThree from "../components/SectionThree"
import Poster from "../components/Poster"
import SectionFive from "../components/SectionFive.js"
import productData from "../../site/data/products.json"

function Home() {
  return (
    <Layout>
      <SectionOne />
      <SectionTwo />
      <SectionThree data={productData?.products} />
      <Poster />
      <SlickSlider data={shopsData?.shops} />
      <SectionFive />
    </Layout>
  )
}

export default Home
