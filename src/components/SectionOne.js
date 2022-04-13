import React from "react"
import * as homeStyle from "../../styles/home.module.css"

function SectionOne() {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex flex-row-reverse">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 p-0 ">
            <div className={homeStyle.bg_img}>
              <div className={homeStyle.bg_color}>
                <img
                  src="https://res.cloudinary.com/dq4fvmcte/image/upload/v1647597879/Madison%20Brown/icecream_tvoxh4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 p-0">
            <div className={homeStyle.content}>
              <div>
                <h2>Some things are meant for sharing.</h2>
                <p>
                  Ice cream can mean a lot of different things but at Madison
                  Brown it stands for family, friends, and community. Over the
                  years our family has enjoyed countless ice cream trips which
                  still serve as some of our fondest memories, and now we’re
                  bringing our happiness to you.
                </p>
                <button className={`custom_btn ${homeStyle.btn}`}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionOne
