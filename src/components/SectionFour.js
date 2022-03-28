import React from "react"
import * as four from "../../styles/sectionFour.module.css"

function SectionFour() {
  return (
    <>
      <div className={` container-fluid bg_sandal ${four.btn_content}`}>
        <div className={four.btn_area}>
          <button className={four.btn}>see all</button>
        </div>
      </div>
    </>
  )
}

export default SectionFour
