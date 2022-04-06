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
          We don’t like ice cream—we love it. And while there’s nothing that
          brings the Brown family of five together like a couple of scoops, the
          more ice cream we ate while swapping stories around the table, the
          more we agreed: Conventional brands just don’t measure up to classic
          parlor quality. And with artificial flavors and preservatives galore?
          Thanks, but no thanks. Here us out: Vanilla ice cream shouldn’t just
          taste like freshly cracked vanilla bean—it should contain it, at least
          according to Beau, the youngest Brown brother. And when you can’t
          decide whether to dig into cake, cookies, or ice cream, you shouldn’t
          have to, middle child Madison insists. (There should be artisan
          flavors for that—we see you, red velvet and cookies and cream!).
          Another thing: The flavor trip shouldn’t end when your spoon hits the
          bottom of the bowl. You deserve that rich and creamy mouthfeel to
          last—older brother JJ’s got this one right.
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
          It took our family two years and hundreds (upon hundreds!) of tastings
          to go from a shared pipe dream to the perfect pint. We knew we were
          there when we all proclaimed it fabulous. And here we are! Named after
          our only sister—don’t middle children deserve the spotlight?!—Madison
          Brown offers both classic ice cream flavors and unique ones so there’s
          something that hits the spot for every member of our family *and*
          yours. The common thread is quality. It’s the very best ice cream
          we’ve ever eaten, and we know you’ll agree.
        </p>
      </div>
    </Layout>
  )
}

export default About
