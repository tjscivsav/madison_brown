import React from "react"
import * as productStyle from "../../styles/product.module.css"

function Product({ opened, data }) {
  return (
    <>
      {data?.map((item, i) => {
        let btn_color = item.btn_color
        return (
          <div
            key={i}
            className={`${btn_color} col-lg-6 col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center my-5`}
          >
            <div className={`${productStyle.img_section}  ${btn_color} `}>
              <img src={item.img || item.img1} alt={item.title} />
            </div>
            <div className={`${productStyle.content}`}>
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
              {/* <button onClick={() => opened(true)}>BUY</button> */}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Product
