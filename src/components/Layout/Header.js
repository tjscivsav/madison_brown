import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import Links from "../../../site/data.json"
import * as HeaderStyle from "../../../styles/header.module.css"

function Header() {
  return (
    <>
      <div className={`container-fluid ${HeaderStyle.lg_navbar}`}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dq4fvmcte/image/upload/v1647597876/Madison%20Brown/nav_logo_y5sdxn.png"
            alt="nav_logo"
            width={164.42}
            height={78.92}
          />
        </Link>
        <ul>
          {Links?.navLink.map((item, i) => (
            <li key={i}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="d-flex flex-row ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-white socialIcon mx-2"
            href={Links.facebook}
          >
            <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: "30px" }} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-white socialIcon mx-2"
            href={Links.instagram}
          >
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "30px" }} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-white socialIcon mx-2"
            href={Links.twitter}
          >
            <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "30px" }} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Header
