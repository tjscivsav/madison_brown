import React, { useState } from "react"
import Modal from "react-modal"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import * as popup from "../../styles/popup.module.css"
import SignupForm from "./SignupForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

function Popup({ open, opened }) {
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
      opened(!open)
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
            Set the scoop and sign up now for all exciting news coming soon!
          </p>
          <SignupForm />
        </div>
      </Modal>
    </>
  )
}

export default Popup
