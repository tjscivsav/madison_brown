import React from "react"
import Layout from "../components/Layout/Layout"
import PageTitle from "../components/PageTitle"
import * as AboutStyle from "../../styles/about.module.css"
import productData from "../../site/data/products.json"

function About() {
  return (
    <Layout>
      <PageTitle title="About us" />
      <div className={`container-fluid  ${AboutStyle.about_content}`}>
        <p className={AboutStyle.para}>
          Ice cream can mean a lot of different things but at Madison Brown it
          stands for family, friends, and community. Over the years our family
          has enjoyed countless ice cream trips which still serve as some of our
          fondest memories. With so many wonderful experiences we wondered how
          we could continue to share our passion with those we love most, and
          thus Madison Brown was born. Named after one of our family members, we
          began to make flavors the same way we made memories - over time and
          together. Each adding our insights and tasting endless combinations we
          landed on our six trademark flavors that ensured the classics were
          perfect with little personalized touches throughout the ingredients.
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
          From there we began giving it to our friends and community and
          realized that not only could we create our own happiness, we could
          share it. We knew that this was how we would spread joy, create
          memories, and bring people together. Therefore, you can count on
          Madison Brown to continue to find ways to give back to the communities
          who create and inspire us…because some things are meant for sharing.
          The Madison Brown Team
        </p>
      </div>
    </Layout>
  )
}

export default About
