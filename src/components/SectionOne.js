import { Link } from "gatsby"
import React from "react"
import * as homeStyle from "../../styles/home.module.css"

function SectionOne({ data }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex flex-row-reverse">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 p-0 ">
            <div className={homeStyle.bg_img}>
              <div className={homeStyle.bg_color}>
                <img src={data?.front_img} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 p-0">
            <div className={homeStyle.content}>
              <div>
                <h2>{data?.title}</h2>
                <p>{data?.desc}</p>
                <Link to="/about">
                  <button className={`custom_btn ${homeStyle.btn}`}>
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionOne
