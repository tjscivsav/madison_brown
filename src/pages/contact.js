import React, { useState } from "react"
import Layout from "../components/Layout/Layout"
import PageTitle from "../components/PageTitle"
import * as contactStyle from "../../styles/contact.module.css"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function Contact() {
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
    <Layout>
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
      <PageTitle title="Contact" />
      <div className={`container-fluid  bg_sandal`}>
        <div className="page_header">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <>
        <div className={contactStyle.bg_img}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 d-flex justify-content-center">
                <form
                  onSubmit={e => handleSubmit(e)}
                  className={contactStyle.form_Section}
                >
                  <div className={contactStyle.form_value}>
                    <h3>Send us a message!</h3>
                    <input
                      className={contactStyle.input}
                      type="text"
                      placeholder="FULL NAME"
                    />
                    <input
                      className={contactStyle.input}
                      type="text"
                      placeholder="EMAIL"
                    />
                    <textarea
                      className={contactStyle.textarea}
                      type="text"
                      placeholder="MESSAGE"
                    />
                    <input
                      className={contactStyle.btn}
                      type="submit"
                      value="SEND"
                    />
                  </div>
                </form>
              </div>
              <div className="col-lg-6 col-12 ">
                <div className={contactStyle.content_section}>
                  <div className={contactStyle.detail_section}>
                    <h3>Contact Us</h3>
                    <div className="d-flex align-items-center ">
                      <img
                        width={100}
                        height={100}
                        src="https://res.cloudinary.com/dq4fvmcte/image/upload/v1648564411/Madison%20Brown/call_icon_lm8tjv.png"
                        alt=""
                      />
                      <a href="tel:707-541-5674">707-541-5674</a>
                    </div>
                    <div className="d-flex align-items-center ">
                      <img
                        width={55}
                        height={45}
                        src="https://res.cloudinary.com/dq4fvmcte/image/upload/v1648564411/Madison%20Brown/mail_icon_cfqkkv.png"
                        alt=""
                      />
                      <a href="mailto:707-541-5674">Madisonbrown@gmail.com</a>
                    </div>
                    <div className="d-flex align-items-center ">
                      <img
                        width={55}
                        height={45}
                        src="https://res.cloudinary.com/dq4fvmcte/image/upload/v1648564410/Madison%20Brown/address_icon_f3tfxu.png"
                        alt=""
                      />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}

export default Contact
