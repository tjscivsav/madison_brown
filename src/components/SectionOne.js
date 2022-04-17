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
                <h2>{data?.title || `Some things are meant for sharing`}</h2>
                <p>
                  {data?.desc ||
                    `Ice cream can mean a lot of different things but at Madison Brown it stands for family, friends, and community. Over the years our family has enjoyed countless ice cream trips which still serve as some of our fondest memories, and now we’re bringing our happiness to you.`}
                </p>
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
