import React from "react"
import * as imageBox from "../../styles/imageBox.module.css"

function ImageBox({ data }) {
  return (
    <>
      <div className="container">
        <div className="row">
          {data?.map((item, i) => (
            <div key={i} className={`col-4 ${imageBox.content}`}>
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
