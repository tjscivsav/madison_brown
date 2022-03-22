import React from "react"
import * as two from "../../styles/sectionTwo.module.css"

function SectionTwo() {
  return (
    <div className={`container-fluid ${two.content}`}>
      <div className={two.border}>
        <h3>
          <span className={two.green}>F</span>
          <span className={two.dough}>a</span>
          <span className={two.chocalate}>b</span>
          <span className={two.blue}>u</span>
          <span className={two.grey}>l</span>
          <span className={two.red}>o</span>
          <span className={two.blue}>u</span>
          <span className={two.dough}>s</span>
          <span> </span>
          <span className={two.grey}>I</span>
          <span className={two.green}>c</span>
          <span className={two.dough}>e</span>
          <span> </span>
          <span className={two.blue}>C</span>
          <span className={two.green}>r</span>
          <span className={two.red}>e</span>
          <span className={two.blue}>a</span>
          <span className={two.green}>m</span>
        </h3>
        {/* <img
          src="https://res.cloudinary.com/dq4fvmcte/image/upload/v1647614357/Madison%20Brown/variety_ice_sgg9qe.png"
          alt=""
        /> */}
      </div>
    </div>
  )
}

export default SectionTwo
