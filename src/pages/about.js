import React from "react"
import Layout from "../components/Layout/Layout"
import PageTitle from "../components/PageTitle"
import * as AboutStyle from "../../styles/about.module.css"
import productData from "../../site/data/products.json"
import { graphql } from "gatsby"

function About({ data }) {
  let about_Data
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
    if (item?.node?.id === "fe6569da-ac62-51a7-be99-f8decd490ca4") {
      about_Data = {
        para1: item?.node?.frontmatter?.para1,
        para2: item?.node?.frontmatter?.para2,
      }
    }
  })
  return (
    <Layout socialLinks={social_links}>
      <PageTitle title="About us" />
      <div className={`container-fluid  ${AboutStyle.about_content}`}>
        <p className={AboutStyle.para}>
          {about_Data?.para1 ||
            `  Ice cream can mean a lot of different things but at Madison Brown it
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
            {productData?.products.map((item, i) => (
              <li key={i}>
                <img src={item.img1} alt={item.title} />
              </li>
            ))}
          </ul>
        </div>
        <p className={AboutStyle.para2}>
          {about_Data?.para1 ||
            `From there we began giving it to our friends and community and
          realized that not only could we create our own happiness, we could
          share it. We knew that this was how we would spread joy, create
          memories, and bring people together. Therefore, you can count on
          Madison Brown to continue to find ways to give back to the communities
          who create and inspire us…because some things are meant for sharing.`}
        </p>
        <p>
          <strong>{`- The Madison Brown Team`}</strong>
        </p>
      </div>
    </Layout>
  )
}

export default About

export const about_Data = graphql`
  query AboutData {
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
