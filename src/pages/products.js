import React from "react"
import Layout from "../components/Layout/Layout"
import PageTitle from "../components/PageTitle"
import Product from "../components/Product"
import productData from "../../site/data/products.json"
function Products() {
  return (
    <Layout>
      <PageTitle title="Products" />
      <div className={`container-fluid  bg_sandal`}>
        <div className="row">
          <Product data={productData?.products} />
        </div>
      </div>
    </Layout>
  )
}

export default Products
