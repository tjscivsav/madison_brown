import React from "react"
import * as imgwithDot from "../../styles/imgwithDot.module.css"

function ImgwithDot() {
  return (
    <>
      <div className={imgwithDot.container}>
        <div className={imgwithDot.img_section}>
          <img
            src="https://res.cloudinary.com/dq4fvmcte/image/upload/v1647851531/Madison%20Brown/ceo_img_wvy5ac.png"
            alt=""
          />
          <div className={imgwithDot.red_dot}></div>
        </div>
        <h5 className="mt-5">Jessica William</h5>
        <h6 className="mb-5">CEO Madison Brown</h6>
      </div>
    </>
  )
}

export default ImgwithDot
