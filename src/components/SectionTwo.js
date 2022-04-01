import React from "react"
import * as two from "../../styles/sectionTwo.module.css"
import productData from "../../site/data/products.json"

function SectionTwo() {
  return (
    <>
      <div className={`container-fluid bg_sandal ${two.content}`}>
        <ul className={two.product_list}>
          {productData?.products.map((item, i) => (
            <li key={i}>
              <img src={item?.cap} alt={item.title} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default SectionTwo
