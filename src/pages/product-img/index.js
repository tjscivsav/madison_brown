import React from "react"
import * as productStyle from "../../../styles/prodictImg.module.css"
import products from "../../../site/data/products.json"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { useLocation } from "@reach/router"
import productsData from "../../../site/data/products.json"

function ProductsImg(props) {
  const location = useLocation()
  var n = location?.pathname?.lastIndexOf("/")
  var result = location?.pathname?.substring(n + 1)
  return (
    <>
      <div className={productStyle.products}>
        <div>
          <Link to="/product-img">
            <h1>Madison Brown Ice Cream Product Images</h1>
          </Link>
          <ul>
            {products?.products.map((item, i) => (
              <Link to={`/product-img/${item?.id}`}>
                <li>{item?.title}</li>
              </Link>
            ))}
          </ul>
          <div className="d-flex  flex-row mt-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className=" socialIcon mx-2"
              href="https://www.instagram.com/madisonbrownfrozen/"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className=" socialIcon mx-2"
              href="https://twitter.com/MadisonBrown"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className=" socialIcon mx-2"
              href="https://twitter.com/MadisonBrown"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
          <Link to="/">
            <input type="button" value="Take Action" />
          </Link>
        </div>
      </div>
      {result === "product-img"
        ? productsData?.products?.slice(0, 1).map((item, i) => (
            <>
              <div className={productStyle.product__img}>
                <img
                  className={productStyle.product__img}
                  key={i}
                  src={item.img1}
                />
              </div>
            </>
          ))
        : props.children}
    </>
  )
}

export default ProductsImg
