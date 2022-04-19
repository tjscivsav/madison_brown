import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, Link } from "gatsby"
import React, { useState } from "react"
import Links from "../../../site/data.json"
import * as HeaderStyle from "../../../styles/header.module.css"
import logo from "../../../src/images/logo.svg"

function Header({ social_links }) {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      {/* Desktop View*/}
      <div className={`container-fluid ${HeaderStyle.lg_navbar}`}>
        <Link to="/">
          <img
            src={logo}
            alt="nav_logo"
            width={164.42}
            height={78.92}
          />
        </Link>
        <ul>
          {Links?.navLink?.slice(0, 4).map((item, i) => (
            <li className={HeaderStyle.page_link} key={i}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="d-flex flex-row ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-white socialIcon mx-2"
            href={
              social_links?.facebook ? social_links?.facebook : Links.facebook
            }
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              style={{ color: "#EFDFB4", fontSize: "30px" }}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-white socialIcon mx-2"
            href={
              social_links?.instagram
                ? social_links?.instagram
                : Links.instagram
            }
          >
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#EFDFB4", fontSize: "30px" }}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-white socialIcon mx-2"
            href={social_links?.twitter ? social_links?.twitter : Links.twitter}
          >
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ color: "#EFDFB4", fontSize: "30px" }}
            />
          </a>
        </div>
      </div>
      {/* Mobile View */}
      <div className={HeaderStyle.mobile_nav}>
        <FontAwesomeIcon
          className="mx-3"
          onClick={() => {
            setToggle(true)
          }}
          icon={faBars}
          size="2x"
        />
        <Link className={HeaderStyle.mobile_nav_logo} to="/">
          <img
            src="https://res.cloudinary.com/dq4fvmcte/image/upload/v1647597876/Madison%20Brown/nav_logo_y5sdxn.png"
            alt="nav_logo"
            width={164.42}
            height={78.92}
          />
        </Link>
        <div
          className={
            toggle
              ? `${HeaderStyle.slide_nav} ${HeaderStyle.active}`
              : HeaderStyle.slide_nav
          }
        >
          <FontAwesomeIcon
            className={`mx-3 ${HeaderStyle.fa_times}`}
            onClick={() => {
              setToggle(false)
            }}
            icon={faTimes}
            size="2x"
          />
          <div className={HeaderStyle.mobile_navbar}>
            <Link className={HeaderStyle.mobile_nav_logo} to="/home">
              <img
                src="https://res.cloudinary.com/dq4fvmcte/image/upload/v1647597876/Madison%20Brown/nav_logo_y5sdxn.png"
                alt="nav_logo"
              />
            </Link>
            <ul>
              {Links?.navLink?.slice(0, 4).map((item, i) => (
                <li className={HeaderStyle.page_link} key={i}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={`d-flex flex-row ${HeaderStyle.icon_section}`}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-white socialIcon mx-2"
              href={
                social_links?.facebook ? social_links?.facebook : Links.facebook
              }
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                style={{ color: "#efdfb4", fontSize: "30px" }}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-white socialIcon mx-2"
              href={
                social_links?.instagram
                  ? social_links?.instagram
                  : Links.instagram
              }
            >
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#efdfb4", fontSize: "30px" }}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-white socialIcon mx-2"
              href={
                social_links?.twitter ? social_links?.twitter : Links.twitter
              }
            >
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ color: "#efdfb4", fontSize: "30px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
