import React from "react"
import * as titleStyle from "../../styles/pageTitle.module.css"
import productData from "../../site/data/products.json"


function PageTitle(props) {
  return (
    <>
      <div className={titleStyle.page_title}>
        <h1>{props.title}</h1>
        <div className={titleStyle.variety_ice}>
        <ul className={titleStyle.product_list}>
          {productData?.products.map((item, i) => (
            <li key={i}>
              <img src={item?.cap} alt={item.title} />
            </li>
          ))}
        </ul>
        </div>
      </div>
    </>
  )
}

export default PageTitle
