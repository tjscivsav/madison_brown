import React, { useState } from "react"
import Layout from "../components/Layout/Layout"
import PageTitle from "../components/PageTitle"
import Product from "../components/Product"
import productData from "../../site/data/products.json"
import Popup from "../components/Popup"
function Products() {
  const [open, setOpen] = useState(false)

  return (
    <Layout>
      <Popup
        open={open}
        opened={() => {
          setOpen(!open)
        }}
      />
      <PageTitle title="Products" />
      <div className={`container-fluid  bg_sandal`}>
        <div className="row">
          <Product
            opened={opened => {
              setOpen(opened)
            }}
            data={productData?.products}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Products
