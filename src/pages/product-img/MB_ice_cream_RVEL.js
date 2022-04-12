import React from "react"
import Layout from "./index"

import * as productStyle from "../../../styles/prodictImg.module.css"
import { useLocation } from "@reach/router"
import products from "../../../site/data/products.json"

function ProductImg() {
  const location = useLocation()
  var n = location?.pathname?.lastIndexOf("/")
  var result = location?.pathname?.substring(n + 1)

  return (
    <>
      <Layout>
        {products?.products?.map((item, i) => {
          return result === item?.id ? (
            <>
              <div className={productStyle.product__img}>
                <img
                  className={productStyle.product__img}
                  key={i}
                  src={item.img1}
                />
              </div>
            </>
          ) : null
        })}
      </Layout>
    </>
  )
}

export default ProductImg
