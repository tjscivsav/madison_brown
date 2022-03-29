import React from "react"
import useWindowSize from "../../hooks/useWindowSize"
import * as imageBox from "../../styles/imageBox.module.css"

function ImageBox({ data }) {
  const { width } = useWindowSize()
  return (
    <>
      <div className={width < 1000 ? "container-fluid" : "container"}>
        <div className="row">
          {data?.map((item, i) => (
            <div key={i} className={`col-lg-4 col-md-6 ${imageBox.content}`}>
              <img src={item.img} alt={item.name} />
              <h5>{item.name}</h5>
              <button>VISIT SITE</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ImageBox
