import React from "react"
import * as poster from "../../styles/poster.module.css"

function Poster({ data }) {
  return (
    <>
      <div className={poster.bg_img}>
        <h2>{data.title}</h2>
      </div>
    </>
  )
}

export default Poster
