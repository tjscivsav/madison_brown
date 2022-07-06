import React from "react"
import SingleProduct from "./SingleProduct"

function Product({ opened, data }) {
  return (
    <>
      {data?.map((item, i) => (
        <SingleProduct item={item} key={i} />

      ))}
    </>
  )
}

export default Product
