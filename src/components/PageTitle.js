import React from "react"
import * as titleStyle from "../../styles/pageTitle.module.css"
function PageTitle(props) {
  return (
    <>
      <div className={titleStyle.page_title}>
        <h1>{props.title}</h1>
        <div className={titleStyle.variety_ice}>
          <img
            src="https://res.cloudinary.com/dq4fvmcte/image/upload/v1647614357/Madison%20Brown/variety_ice_sgg9qe.png"
            alt="variety_ice_cream_img"
          />
        </div>
      </div>
    </>
  )
}

export default PageTitle
