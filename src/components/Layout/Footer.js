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

function Footer() {
  return (
    <>
      <div className={`container-fluid ${footerStyle.footer}`}>
        <div className={`row ${footerStyle.content}`}>
          <div className="col-5">
            <img
              className="mb-4 "
              src="https://res.cloudinary.com/dq4fvmcte/image/upload/v1647597876/Madison%20Brown/nav_logo_y5sdxn.png"
              alt="nav_logo"
              width={164.42}
              height={78.92}
            />
            <p className={footerStyle.text}>
              SIGN UP TO RECEIVE EXCLUSIVE OFFERS AND EXCITING NEWS
            </p>
            <form className="d-flex flex-column">
              <input
                className={footerStyle.input}
                type="email"
                placeholder="Enter your email"
              />
              <button className={footerStyle.btn}>Submit</button>
            </form>
          </div>
          <div className="col-3">
            <h4 className={footerStyle.heading}>Website</h4>
            <ul className={footerStyle.page_link}>
              {Links?.navLink.map((item, i) => (
                <li key={i}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-4">
            <h4 className={footerStyle.heading}>Find Us</h4>
            <div className="d-flex flex-row ">
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
            <p className={footerStyle.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a className={footerStyle.mobile_number} href="tel:707-541-5674">
              707-541-5674
            </a>
          </div>
        </div>
        <span className={footerStyle.rights}>All RIghts Reserved.</span>
      </div>
    </>
  )
}

export default Footer
