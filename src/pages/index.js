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
      <section className=" d-flex flex-column">
        <div id="hide" className="bg_gif"></div>
        <div className="content d-flex flex-column">
          <img src={logo} width={243} height={162} alt="" />
          <img src={iceCream} width={330} height={326} alt="" />
          <form
            className="form"
            action="https://madisonbrownicecream.us14.list-manage.com/subscribe/post?u=cc8239a65f07d2b1871ac509f&amp;id=a2d5a9b530"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            novalidate
          >
            <div class="input-group mb-3">
              <input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                placeholder="Email Address"
                name="b_cc8239a65f07d2b1871ac509f_a2d5a9b530"
                className="input text-center"
                required
              />
              <input
                type="submit"
                value="Sign Up"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
