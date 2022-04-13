import React, { useState } from "react"
import * as footerStyle from "../../../styles/footer.module.css"
import Links from "../../../site/data.json"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function Footer() {
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
      <div className={`container-fluid ${footerStyle.footer}`}>
        <div className={`row ${footerStyle.content}`}>
          <div id={footerStyle.first_child} className="col-lg-5 col-md-12">
            <img
              className="mb-4 "
              src="https://res.cloudinary.com/dq4fvmcte/image/upload/v1647597876/Madison%20Brown/nav_logo_y5sdxn.png"
              alt="nav_logo"
            />
            <p className={footerStyle.text}>Get the scoop!</p>
            <form
              onSubmit={e => handleSubmit(e)}
              className="d-flex flex-column"
            >
              <input
                className={footerStyle.input}
                type="email"
                placeholder="Enter email"
                onChange={e => setEmail(e.target.value)}
              />
              <input
                type="submit"
                value="Subscribe!"
                className={footerStyle.btn}
              />
            </form>
          </div>
          <div
            id={footerStyle.second_child}
            className="col-lg-3 col-md-5 col-sm-5 col-5 "
          >
            <h4 className={footerStyle.heading}>Website</h4>
            <ul className={footerStyle.page_link}>
              {Links?.navLink.map((item, i) => (
                <li key={i}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            id={footerStyle.third_child}
            className="col-lg-4 col-md-7 col-sm-7 col-7"
          >
            <div>
              <h4 className={footerStyle.heading}>Find Us</h4>
              <div id={footerStyle.social_icons} className="d-flex flex-row ">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white socialIcon me-4"
                  href={Links.facebook}
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    style={{ fontSize: "30px" }}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white socialIcon mx-1"
                  href={Links.instagram}
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ fontSize: "30px" }}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white socialIcon ms-4"
                  href={Links.twitter}
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ fontSize: "30px" }}
                  />
                </a>
              </div>
              {/* <p className={footerStyle.para}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a className={footerStyle.mobile_number} href="tel:707-541-5674">
                707-541-5674
              </a> */}
            </div>
          </div>
        </div>
        <span className={footerStyle.rights}>All Rights Reserved.</span>
      </div>
    </>
  )
}

export default Footer
