import React from "react"
import * as five from "../../styles/SectionFive.module.css"
import productData from "../../site/data/products.json"
import useWindowDimensions from "../../hooks/useDimensions"
import useWindowSize from "../../hooks/useWindowSize"

function SectionFive() {
  const { height } = useWindowDimensions()
  const { width } = useWindowSize()
  let x = width / height
  //  .5622, .462, .462, .4618, .486, .450, .695, 0.75, 0.667, 0.72, .451, 1.707, 1.6
  let border_height
  switch (true) {
    case x < 0.405:
      border_height = height * 0.13
      break
    case x < 0.465:
      border_height = height * 0.109
      break
    case x < 0.49:
      border_height = height * 0.142
      break
    case x < 0.6667:
      border_height = height * 0.06
      break
    case x < 0.7:
      border_height = height * 0.07
      break
    case x === 0.75 && height < 730:
      border_height = height * 0.16
      break
    case x < 0.76:
      border_height = height * 0.09
      break
    case x < 1.61:
      border_height = height * 0.15
      break
    case x < 1.76:
      border_height = height * 0.25
      break
    case x < 1.82:
      border_height = height * 0.15
      break
    case x < 1.85:
      border_height = height * 0.155
      break
    default:
      border_height = 160
  }
  console.log(x, width, height, border_height)
  return (
    <>
      <div style={{ height: `${border_height}vh` }} className={five.border_img}>
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
                LOOKING FOR THE GOOD STUFF? YOU’RE GETTING WARMER.YOUR FREEZER
                SECTION JUST GOT HOTTER!
              </h1>
              <button className="custom_btn">FIND US</button>
            </div>
          </div>
          <div className={five.title_section}>
            <h1>MEET YOUR NEW FAVORITE FLAVORS!</h1>
            <ul className={five.product_list}>
              {productData?.products.map((item, i) => (
                <li key={i}>
                  <img src={item?.cap} alt={item.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={five.btn}>
        <button className="custom_btn">FIND US</button>
      </div>
    </>
  )
}

export default SectionFive
