import React from "react"
import * as five from "../../styles/SectionFive.module.css"

function SectionFive() {
  return (
    <>
      <div className={five.border_img}>
        <div className="container-fluid">
          <div className="row">
            <div className={`col-lg-6 col-md-12 col-12 ${five.img_section}`}>
              <div>
                <img
                  src="https://res.cloudinary.com/dq4fvmcte/image/upload/v1648045018/Madison%20Brown/red_velvet_p0j16b.png"
                  alt=""
                />
              </div>
            </div>
            <div
              className={`col-lg-6 col-md-12 col-12 ${five.content_section}`}
            >
              <h1>
                LOOKING FOR THE GOOD STUFF? YOU’RE GETTING WARMER. AND BY WARMER
                WE MEAN COLDER.
              </h1>
              <button>FIND US</button>
            </div>
          </div>
          <div className={five.title_section}>
            <h1>GOODNESS COMES IN ALL FLAVOURS</h1>
            <img
              src="https://res.cloudinary.com/dq4fvmcte/image/upload/v1648117503/Madison%20Brown/products_img_naeo23.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={five.btn}>
        <button>FIND US</button>
      </div>
    </>
  )
}

export default SectionFive
