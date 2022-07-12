import React from "react"
import Modal from "react-modal"
import "react-toastify/dist/ReactToastify.css"
import * as popup from "../../styles/popup.module.css"
import SignupForm from "./SignupForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

function Popup({ open, opened }) {
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
            Get the scoop and sign up now for all exciting news coming soon!
          </p>
          <SignupForm />
        </div>
      </Modal>
    </>
  )
}

export default Popup
