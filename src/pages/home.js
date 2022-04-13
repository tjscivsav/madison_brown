import React, { useState } from "react"
import iceCream from "../../static/ICE_cream_Product.gif"
import logo from "../../static/logo.png"
import "../../styles/global.css"
import "../../styles/resposive.css"
import "../../styles/bootstrap.css"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import Seo from "../components/SEO"

export default function Index() {
  const [email, setEmail] = useState("")
  const handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(email)
    if (result.result === "success") {
      toast(result.msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else {
      toast(`${result.msg}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    e.target.reset()
    setEmail("")
  }

  const handleChange = e => {
    setEmail(e.target.value)
  }

  return (
    <>
      <Seo title="Madison Brown" />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section className=" d-flex flex-column">
        <div id="hide" className="bg_gif"></div>
        <div className="content d-flex flex-column">
          <img src={logo} width={243} height={162} alt="" />
          <img src={iceCream} width={330} height={326} alt="" />
          <form className="form" onSubmit={e => handleSubmit(e)}>
            <input
              type="email"
              defaultValue={email}
              onChange={e => handleChange(e)}
              placeholder="Email Address"
              name="email"
              className="input text-center"
            />
            <input type="submit" className="button" value="Sign Up" />
          </form>
          <div className="d-flex  flex-row mt-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary socialIcon mx-2"
              href="https://www.instagram.com/madisonbrownfrozen/"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary socialIcon mx-2"
              href="https://twitter.com/MadisonBrown"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              target="_blank"
              className="text-secondary socialIcon mx-2"
              href="https://www.tiktok.com/@madisonbrownicecream"
            >
              <FontAwesomeIcon icon={faTiktok} size="2x" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
