import React from "react"
import Modal from "react-modal"
import "react-toastify/dist/ReactToastify.css"
import * as popup from "../../styles/popup.module.css"
import SignupForm from "./SignupForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

function Popup({ open, opened, data}) {
  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={false}
        className="popup_content"
        overlayClassName="popup_overlay"
        contentLabel="Example Modal"
        preventScroll={true}
      >
        <div className={popup.modal_window}>
          <FontAwesomeIcon
            className={`mx-3 ${popup.fa_times}`}
            onClick={() => {
              opened(!open)
            }}
            icon={faTimes}
            size="2x"
          />
          <p>
            {data.node.frontmatter.poster_title}
          </p>
          <a 
            target="_blank"
            href={
              data.node.frontmatter.poster_btn_link
                ? data.node.frontmatter.poster_btn_link
                : "https://www.walmart.com/"
            }
            rel="noreferrer"
          >
              {data.node.frontmatter.poster_btn_name}
          </a> 
        </div>
      </Modal>
    </>
  )
}

export default Popup
