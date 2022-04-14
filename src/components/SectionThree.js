import { Link } from "gatsby"
import React, { useState } from "react"
import * as three from "../../styles/sectionThree.module.css"
import Popup from "./Popup"

function SectionThree({ data }) {
  return (
    <>
      <div className="container-fluid products">
        <div className="row">
          {data?.slice(3, 6).map((item, i) => (
            <div
              key={i}
              style={{
                borderImage: `url(${item?.frame}) 10 fill`,
              }}
              className={`col-lg-4 col-md-12 col-12  ${three.border_img} ${item.btn_color}`}
            >
              <img src={item?.img1} alt={item.title} />
              <h5>{item.title}</h5>
              <Link to="/products">
                <button>SHOP NOW</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={` container-fluid bg_sandal ${three.btn_content}`}>
        <div className={three.btn_area}>
          <Link to="/products">
            <button className={three.btn}>see all</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SectionThree
