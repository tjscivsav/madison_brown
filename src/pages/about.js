import React, { useState } from "react"
import Layout from "../components/Layout/Layout"
import PageTitle from "../components/PageTitle"
import * as AboutStyle from "../../styles/about.module.css"
import productData from "../../site/data/products.json"
import { graphql } from "gatsby"
import _ from "lodash"
import Seo from "../components/Seo"

export const about_Data = graphql`
  query AboutData {
    about: allMarkdownRemark {
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
            products {
              btn_color
              desc
              id
              img
              title
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
    seo: allMarkdownRemark (filter: {fileAbsolutePath: {glob: "**/about.md"}}) {
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
`

function About({ data }) {
  let about_Data = _.find(data?.about?.edges, function (item) {
    if (item?.node?.frontmatter?.templateKey === "about") {
      return item?.node
    }
  })
  let social_links = _.find(data?.about?.edges, function (item) {
    if (item?.node?.frontmatter?.templateKey === "socialLinks") {
      return item?.node
    }
  })
  let product_Data = _.find(data?.about?.edges, function (item) {
    if (item?.node?.frontmatter?.templateKey === "products") {
      return item?.node
    }
  })

  const seoData = data.seo.edges[0].node.frontmatter

  let product_img = product_Data?.node?.frontmatter
    ? product_Data?.node?.frontmatter
    : productData
  return (
    <>
      <Seo
        title={seoData?.title ? seoData.title : "About"}
        description={seoData?.description ? seoData.description : "About Us"}
      />
    <Layout socialLinks={social_links?.node?.frontmatter}>
      <PageTitle title="About us" />
      <div className={`container-fluid  ${AboutStyle.about_content}`}>
        <p className={AboutStyle.para}>
          {about_Data?.node?.frontmatter?.para1
            ? about_Data?.node?.frontmatter?.para1
            : `  Ice cream can mean a lot of different things but at Madison Brown it
          stands for family, friends, and community. Over the years our family
          has enjoyed countless ice cream trips which still serve as some of our
          fondest memories. With so many wonderful experiences we wondered how
          we could continue to share our passion with those we love most, and
          thus Madison Brown was born. Named after one of our family members, we
          began to make flavors the same way we made memories - over time and
          together. Each adding our insights and tasting endless combinations we
          landed on our six trademark flavors that ensured the classics were
          perfect with little personalized touches throughout the ingredients.`}
        </p>
        <div className="mx-5">
          <ul className={AboutStyle.product_list}>
            {product_img?.products.map((item, i) => (
              <li key={i}>
                <img src={item?.img} alt={item?.title} />
              </li>
            ))}
          </ul>
        </div>
        <p className={AboutStyle.para2}>
          {about_Data?.node?.frontmatter?.para2
            ? about_Data?.node?.frontmatter?.para2
            : `From there we began giving it to our friends and community and
          realized that not only could we create our own happiness, we could
          share it. We knew that this was how we would spread joy, create
          memories, and bring people together. Therefore, you can count on
          Madison Brown to continue to find ways to give back to the communities
          who create and inspire us??? because some things are meant for sharing.`}
        </p>
        <p>
          <strong>{`- The Madison Brown Team`}</strong>
        </p>
      </div>
    </Layout>
    </>
  )
}

export default About
