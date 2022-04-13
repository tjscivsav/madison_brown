import * as React from "react"
import { graphql } from "gatsby"
import ProductView from "../../product-view"

function Product(props) {
  const { product } = props.data
  console.log(props)
  return <ProductView product={product} />
}

export default Product

export const query = graphql`
  query products_data {
    dataJson {
      products {
        title
        img1
        img
        id
        frame
        desc
        cap
        btn_color
      }
    }
  }
`
