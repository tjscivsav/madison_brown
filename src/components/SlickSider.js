import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import * as cardStyle from "../../styles/cardStyle.module.css"

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  swipeToSlide: true,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        swipeToSlide: true,
        centerMode: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        swipeToSlide: true,
        centerMode: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        swipeToSlide: true,
        centerMode: true,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        swipeToSlide: true,
        centerMode: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        swipeToSlide: true,
        centerMode: true,
      },
    },
  ],
}

const CustomSlide = ({ item, i }) => {
  let bg =
    i % 4 === 0
      ? "#F3F3F3"
      : i % 3 === 0
      ? "#D7EDF3"
      : i % 2 === 0
      ? "#B8E6CA"
      : "#FDBFCB"
  let red_dot =
    i % 4 === 0
      ? "#C4C4C4"
      : i % 3 === 0
      ? "#4298B5"
      : i % 2 === 0
      ? "#4A9560"
      : "#E41E2D"
  let txt_bg =
    i % 4 === 0
      ? "#847770"
      : i % 3 === 0
      ? "#98BFCB"
      : i % 2 === 0
      ? "#92D7AD"
      : "#F2A1B1"
  let txt_clr =
    i % 4 === 0
      ? "#C4C4C4"
      : i % 3 === 0
      ? "#4298B5"
      : i % 2 === 0
      ? "#4A9560"
      : "#E41E2D"
  return (
    <>
      <div
        style={{
          backgroundColor: bg,
        }}
        className={cardStyle.container}
      >
        <div className={cardStyle.content}>
          <div
            style={{
              backgroundColor: txt_bg,
            }}
            className={cardStyle.img_section}
          >
            {!item?.upcoming ? (
              <>
                <img src={item?.img} alt={item?.location} />
                <div
                  style={{ backgroundColor: red_dot }}
                  className={cardStyle.red_dot}
                ></div>
              </>
            ) : (
              <>
                <h1 style={{ color: txt_clr }} className="mb-4">
                  {item?.upcoming}
                </h1>
                <div
                  style={{ backgroundColor: red_dot }}
                  className={cardStyle.red_dot}
                ></div>
              </>
            )}
          </div>
          <h5 className="mt-3">{item?.location}</h5>
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
          <CustomSlide key={i} item={item} i={i + 2} />
        ))}
      </Slider>
    </>
  )
}

export default SlickSider
