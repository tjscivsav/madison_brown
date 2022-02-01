import React, { useState } from "react"
import useWindowSize from "../../hooks/useWindowSize"
import iceCream from "../../static/ICE_cream_Product.gif"
import logo from "../../static/logo.png"
import "../../styles/global.css"
import "../../styles/resposive.css"
import "../../styles/bootstrap.css"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Home() {
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
            {/* Same as */}
            <ToastContainer />
          </form>
        </div>
      </section>
    </>
  )
}
