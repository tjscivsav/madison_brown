import React from "react"
import useWindowSize from "../../hooks/useWindowSize"
import iceCream from "../../static/ICE_cream_Product.gif"
import logo from "../../static/logo.png"
import "../../styles/global.css"
import "../../styles/resposive.css"
import "../../styles/bootstrap.css"

export default function Home() {
  return (
    <>
      <section className="bg_gif d-flex flex-column">
        <img src={logo} width={243} height={162} alt="" />
        <img src={iceCream} width={330} height={326} alt="" />
        <form className="form" action="">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="example@xyz.com"
            />
            <button class="btn btn-outline-secondary" type="button">
              Sign Up
            </button>
          </div>
        </form>
      </section>
    </>
  )
}
