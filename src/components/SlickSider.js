import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import * as cardStyle from "../../styles/cardStyle.module.css"

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  centerMode: true,
}

const CustomSlide = ({ item, i }) => {
  let bg =
    i % 4 === 0
      ? "#FDBFCB"
      : i % 3 === 0
      ? "#b8e5ca"
      : i % 2 === 0
      ? "#D7EDF3"
      : "#ffffff"

  return (
    <>
      <div
        style={{
          backgroundColor: bg,
        }}
        className={cardStyle.container}
      >
        <div className={cardStyle.content}>
          <div className={cardStyle.img_section}>
            <img src={item?.img} alt={item?.location} />
            <div className={cardStyle.red_dot}></div>
          </div>
          <h5 className="mt-5">{item?.location}</h5>
          <h6 className="mb-5">{item?.upcoming}</h6>
        </div>
      </div>
    </>
  )
}

function SlickSider({ data }) {
  return (
    <>
      <Slider {...settings}>
        {data?.map((item, i) => (
          <CustomSlide key={i} item={item} i={i + 1} />
        ))}
      </Slider>
    </>
  )
}

export default SlickSider
