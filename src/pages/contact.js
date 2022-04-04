import React from "react"
import Layout from "../components/Layout/Layout"
import PageTitle from "../components/PageTitle"
import * as contactStyle from "../../styles/contact.module.css"
function Contact() {
  return (
    <Layout>
      <PageTitle title="Contact" />
      <div className={`container-fluid  bg_sandal`}>
        <div className="page_header">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className={contactStyle.contact_section}>
        <div className={contactStyle.content}>
          <img
            src="https://res.cloudinary.com/dq4fvmcte/image/upload/v1649070252/Madison%20Brown/contact_frame_m2qohu.png"
            alt=""
          />
          <div className="container">
            <div className="row">
              <div className="col">
                <form className={contactStyle.form_Section}>
                  <div className={contactStyle.form_value}>
                    <h3>Send us a message!</h3>
                    <input type="text" placeholder="FULL NAME" />
                    <input type="text" placeholder="EMAIL" />
                    <textarea type="text" placeholder="MESSAGE" />
                    <button>SEND</button>
                  </div>
                </form>
              </div>
              <div className="col">
                <div className={contactStyle.content_section}>
                  <div className={contactStyle.detail_section}>
                    <h3>Contact Us</h3>
                    <div className="d-flex align-items-center">
                      <img
                        width={100}
                        height={100}
                        src="https://res.cloudinary.com/dq4fvmcte/image/upload/v1648564411/Madison%20Brown/call_icon_lm8tjv.png"
                        alt=""
                      />
                      <a href="tel:707-541-5674">707-541-5674</a>
                    </div>
                    <div className="d-flex align-items-center">
                      <img
                        width={55}
                        height={45}
                        src="https://res.cloudinary.com/dq4fvmcte/image/upload/v1648564411/Madison%20Brown/mail_icon_cfqkkv.png"
                        alt=""
                      />
                      <a href="mailto:707-541-5674">Madisonbrown@gmail.com</a>
                    </div>
                    <div className="d-flex align-items-center">
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
      </div>
    </Layout>
  )
}

export default Contact
