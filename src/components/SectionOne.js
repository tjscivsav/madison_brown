import React from "react"
import * as homeStyle from "../../styles/home.module.css"

function SectionOne() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 p-0">
            <div className={homeStyle.content}>
              <h2>Fabulous Ice Cream</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat quis vitae, tellus. Amet, mollis diam porttitor tempor
                faucibus lectus lectus.
              </p>
              <button className={`custom_btn ${homeStyle.btn}`}>see all</button>
            </div>
          </div>
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
        </div>
      </div>
    </>
  )
}

export default SectionOne
