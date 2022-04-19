import React from "react"
import * as footerStyle from "../../../styles/footer.module.css"
import Links from "../../../site/data.json"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import SignupForm from "../SignupForm"
import footer_logo from "../../../src/images/footer_logo.svg

function Footer() {
  return (
    <>
      <div className={`container-fluid ${footerStyle.footer}`}>
        <div className={`row ${footerStyle.content}`}>
          <div id={footerStyle.first_child} className="col-lg-5 col-md-12">
            <img
              className="mb-4 "
              src={footer_logo}
              alt="nav_logo"
            />
            <p className={footerStyle.text}>Get the scoop!</p>
            <SignupForm />
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
            </div>
          </div>
        </div>
        <span className={footerStyle.rights}>All Rights Reserved.</span>
      </div>
    </>
  )
}

export default Footer
