import React from "react"
import * as productStyle from "../../styles/product.module.css"

function Product({ data }) {
  return (
    <>
      {data?.map((item, i) => {
        let btn_color = item.btn_color
        return (
          <div
            key={i}
            className="col-6 d-flex flex-column justify-content-center align-items-center my-5"
          >
            <div className={productStyle.img_section}>
              <img src={item.img} alt={item.title} />
            </div>
            <div className={`${productStyle.content} ${btn_color}`}>
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
              <button>BUY</button>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Product
