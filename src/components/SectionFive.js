import React from "react"
import * as five from "../../styles/SectionFive.module.css"
import productData from "../../site/data/products.json"

function SectionFive({ opened }) {
  return (
    <>
      <div className={five.border_img}>
        <div className="container-fluid">
          <div className={`row ${five.all_items}`}>
            <div className={`col-lg-6 col-md-12 col-12 ${five.img_section}`}>
              <div>
                <img
                  src="https://res.cloudinary.com/du0nuz3fi/image/upload/v1650448769/Madison%20Brown/product_img/MB_ice_cream_RVEL_inbpmd.png"
                  alt=""
                />
              </div>
            </div>
            <div
              className={`col-lg-6 col-md-12 col-12 ${five.content_section}`}
            >
              <h1>
                Don’t walk—RUN! Our flavors are now carried in stores across the
                country.
              </h1>
              <button onClick={() => opened(true)} className="custom_btn">
                FIND US
              </button>
            </div>
          </div>
        </div>
        <div className={five.title_section}>
          <h1>MEET YOUR NEW FAVORITE FLAVORS!</h1>
          <ul className={five.product_list}>
            {productData?.products.map((item, i) => (
              <li key={i}>
                <img src={item?.cap} alt={item.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={five.btn}>
        <button onClick={() => opened(true)} className="custom_btn">
          FIND US
        </button>
      </div>
    </>
  )
}

export default SectionFive
