import React from "react"
import * as three from "../../styles/sectionThree.module.css"

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
              <button>SHOP NOW</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SectionThree
