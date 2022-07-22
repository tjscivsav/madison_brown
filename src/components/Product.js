import React from "react"
import SingleProduct from "./SingleProduct"

function Product({ setOpen, opened, data }) {
  return (
    <>
      {data?.map((item, i) => (
        <SingleProduct item={item} key={i} setOpen={setOpen}/>

      ))}
    </>
  )
}

export default Product
