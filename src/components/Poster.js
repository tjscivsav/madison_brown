import { Link } from "gatsby"
import React from "react"
import * as poster from "../../styles/poster.module.css"

function Poster({ data }) {
  console.log(data)
  return (
    <>
      <div className={poster.bg_img}>
        <h2 className={poster.poster_title}>{data?.title ? data?.title : `FIND OUR ICE CREAM`}</h2>
        {data?.poster_btn_name ? (
          <Link
            target="_blank"
            to={
              data.poster_btn_link
                ? data.poster_btn_name
                : "https://www.walmart.com/"
            }
          >
            {data?.poster_btn_name
              ? data?.poster_btn_name
              : `Available now at Walmart.com`}
          </Link>
        ) : null}
      </div>
    </>
  )
}

export default Poster
