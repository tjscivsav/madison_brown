import React, { useState } from "react"
import "react-toastify/dist/ReactToastify.css"
import { toast, ToastContainer } from "react-toastify"
import addToMailchimp from "gatsby-plugin-mailchimp"
import * as footerStyle from "../../styles/footer.module.css"

function SignupForm() {
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

  return (
    <>
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
      <form onSubmit={e => handleSubmit(e)} className="d-flex flex-column">
        <input
          className={footerStyle.input}
          type="email"
          placeholder="Enter email"
          onChange={e => setEmail(e.target.value)}
        />
        <input type="submit" value="Subscribe!" className={footerStyle.btn} />
      </form>
    </>
  )
}

export default SignupForm
