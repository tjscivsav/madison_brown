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
                <h2>Best. Ice Cream. Ever!</h2>
                <p>
                  Madison Brown is all about fabulous ice cream—the stuff that
                  celebrations are made of. Our family-owned and operated
                  creamery makes pints that bring people together, and that’s
                  exactly how we like it. So, what are you waiting for? Get your
                  spoon!
                </p>
                <button className={`custom_btn ${homeStyle.btn}`}>
                  FEATURED FLAVORS
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
