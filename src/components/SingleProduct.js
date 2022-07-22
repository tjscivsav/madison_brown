import React, { useCallback, useEffect, useState } from 'react'
import * as productStyle from "../../styles/product.module.css"

import ExploreGallery from "./ExploreGallery"


export default function SingleProduct({ item, setOpen }) {
    const [galleryOpen, setGalleryOpen] = useState(false)

    const escFunction = useCallback((event) => {
      if (event.key === "Escape") {
        setGalleryOpen(false)
      }
    }, [])
  
    useEffect(() => {
      document.addEventListener("keydown", escFunction, false)

      return () => {
        document.removeEventListener("keydown", escFunction, false)
      }
    }, [])

    let btn_color = item.btn_color
        return (
          <div
            className={`${btn_color} col-lg-6 col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center my-5`} 
          >
            {/* <ExploreGallery images={ item.galleryContent} open={galleryOpen} setOpen={setGalleryOpen} /> */}
            <div className={`${productStyle.img_section}  ${btn_color} `}>
              <img src={item.img || item.img1} alt={item.title} />
            </div>
            <div className={`${productStyle.content}`}>
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
              <button onClick={() => setOpen(true)}>FIND US</button> 
            </div>
          </div>
        )
}