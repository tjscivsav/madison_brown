import React, { useRef, useState } from "react"
import Layout from "../components/Layout/Layout"
import PageTitle from "../components/PageTitle"
import * as contactStyle from "../../styles/contact.module.css"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import useWindowSize from "../../hooks/useWindowSize"
import { graphql } from "gatsby"
import _ from "lodash"

import emailjs from '@emailjs/browser'
import Seo from "../components/Seo"

export const contact_Data = graphql`
  query ContactData {
    contact:allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            templateKey
            email {
              email_id
            }
            facebook
            front_img
            instagram
            para2
            para1
            poster_title
            products {
              btn_color
              desc
              frame
              id
              img
              title
            }
            bg_img
            desc
            seoTitle
            shops {
              img
              location
              upcoming
            }
            tiktok
            title
            twitter
          }
        }
      }
    }
    seo: allMarkdownRemark (filter: {fileAbsolutePath: {glob: "**/contact.md"}}) {
      edges {
        node {
          id
          frontmatter {
            seoTitle
            seoDescription
          }
        }
      }
    }
  }
`

function Contact({ data }) {
  const { width, height } = useWindowSize()
  let x = width / height
  let bg_img_height
  let content_section
  let form_section
  let form_value
  let form_height
  switch (true) {
    case x < 0.465:
      bg_img_height = height * 0.09
      break
    case x < 0.487:
      bg_img_height = height * 0.11
      break
    case x < 0.563:
      bg_img_height = height * 0.14
      break
    case x < 0.667:
      bg_img_height = height * 0.05
      break
    case x < 0.695:
      bg_img_height = height * 0.08
      break
    case x < 0.76 && height === 720:
      bg_img_height = height * 0.152
      form_height = height * 0.062
      break
    case x < 0.76:
      bg_img_height = height * 0.095
      break
    case x < 1.95 && height === 1058:
      bg_img_height = height * 0.076
      form_section = width * 0.35
      form_value = width * 0.28
      content_section = 90
      break
    case x < 1.3:
      bg_img_height = height * 0.18
      form_section = 80
      content_section = 90
      form_value = 70
      break
    case x < 1.62:
      bg_img_height = height * 0.12
      break
    case x < 1.71:
      bg_img_height = height * 0.17
      break
    case x < 1.82:
      bg_img_height = height * 0.098
      form_section = 80
      content_section = 90
      form_value = 70
      break

    default:
      bg_img_height = 90
  }
  const [email, setEmail] = useState("")

  const form = useRef()

  const handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(email)
    if (result.result === "success") {
      emailjs.sendForm("service_0m3e4dm", "template_t0b1cdf", form.current, "-XAZrfXhu70OFhzp7")
      .then((result) => {
        toast("We will Contact you soon", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })


      }, (error) => {
        toast("Error sending message", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })

      });
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
  let social_links = _.find(data?.contact?.edges, function (item) {
    if (item?.node?.frontmatter?.templateKey === "socialLinks") {
      return item?.node
    }
  })
  let email_details = _.find(data?.contact?.edges, function (item) {
    if (item?.node?.frontmatter?.templateKey === "contact") {
      return item?.node
    }
  })
  const seoData = data.seo.edges[0].node.frontmatter
  return (
    <>
      <Seo
        title={seoData?.title ? seoData.title : "Contact"}
        description={seoData?.description ? seoData.description : "Contact Us"}
      />
    <Layout socialLinks={social_links?.node?.frontmatter}>
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
      <div className={`container-fluid  bg_sandal`}></div>
      <>
        <div
          style={{ height: `${bg_img_height}vh` }}
          className={contactStyle.bg_img}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-12">
                <form
                  style={{ height: `${form_height}vh` }}
                  onSubmit={e => handleSubmit(e)}
                  className={contactStyle.form_Section}
                  ref={form}
                >
                  <div className={contactStyle.form_value}>
                    <h3>Send us a message!</h3>
                    <input
                      className={contactStyle.input}
                      type="text"
                      placeholder="FULL NAME"
                      name="from_name"
                      required
                    />
                    <input
                      className={contactStyle.input}
                      type="text"
                      onChange={e => setEmail(e.target.value)}
                      placeholder="EMAIL"
                      name="reply_to"
                      required
                    />
                    <textarea
                      className={contactStyle.textarea}
                      type="text"
                      placeholder="MESSAGE"
                      name="message"
                      required
                    />
                    <input
                      className={contactStyle.btn}
                      type="submit"
                      value="SEND"
                    />
                  </div>
                </form>
              </div>
              <div className="col-lg-6 col-12">
                <div
                  style={{ width: `${content_section}%` }}
                  className={contactStyle.content_section}
                >
                  <div className={contactStyle.detail_section}>
                    <h3>Contact Us</h3>
                    {email_details?.node?.frontmatter?.email?.map((item, i) =>
                      item?.email_id ? (
                        <>
                          <div key={i} className="d-flex align-items-center ">
                            <img
                              width={55}
                              height={45}
                              src="https://res.cloudinary.com/du0nuz3fi/image/upload/v1650449039/Madison%20Brown/main_icon_nii9ql.png"
                              alt=""
                            />
                            <a href={`mailto:${item?.email_id}`}>
                              {item?.email_id}
                            </a>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="d-flex align-items-center ">
                            <img
                              width={55}
                              height={45}
                              src="https://res.cloudinary.com/du0nuz3fi/image/upload/v1650449039/Madison%20Brown/main_icon_nii9ql.png"
                              alt=""
                            />
                            <a href="mailto:Marketing@madisonbrown.com">
                              Marketing@madisonbrown.com
                            </a>
                          </div>
                        </>
                      )
                    )}
                    <>
                      {/* {email_id?.map((item, i) =>
                      item ? (
                        <div className="d-flex align-items-center ">
                          <img
                            width={55}
                            height={45}
                            src="https://res.cloudinary.com/dq4fvmcte/image/upload/v1648564411/Madison%20Brown/mail_icon_cfqkkv.png"
                            alt=""
                          />
                          <a href={`mailto:${item?.email_id}`}>
                            {item?.email_id}
                          </a>
                        </div>
                      ) : (
                        <>
                          <div className="d-flex align-items-center ">
                            <img
                              width={55}
                              height={45}
                              src="https://res.cloudinary.com/dq4fvmcte/image/upload/v1648564411/Madison%20Brown/mail_icon_cfqkkv.png"
                              alt=""
                            />
                            <a href="mailto:Sales@madisonbrown.com">
                              Sales@madisonbrown.com
                            </a>
                          </div>
                          <div className="d-flex align-items-center ">
                            <img
                              width={55}
                              height={45}
                              src="https://res.cloudinary.com/dq4fvmcte/image/upload/v1648564411/Madison%20Brown/mail_icon_cfqkkv.png"
                              alt=""
                            />
                            <a href="mailto:Marketing@madisonbrown.com">
                              Marketing@madisonbrown.com
                            </a>
                          </div>
                        </>
                      )
                    )} */}
                      {/* <div className="d-flex align-items-center ">
                      <img
                        width={100}
                        height={100}
                        src="https://res.cloudinary.com/dq4fvmcte/image/upload/v1648564411/Madison%20Brown/call_icon_lm8tjv.png"
                        alt=""
                      />
                      <a href="tel:707-541-5674">707-541-5674</a>
                    </div> */}

                      {/* <div className="d-flex align-items-center ">
                      <img
                        width={55}
                        height={45}
                        src="https://res.cloudinary.com/dq4fvmcte/image/upload/v1648564411/Madison%20Brown/mail_icon_cfqkkv.png"
                        alt=""
                      />
                      <a href="mailto:Marketing@madisonbrown.com">
                        Marketing@madisonbrown.com
                      </a>
                    </div> */}
                      {/* <div className="d-flex align-items-center ">
                      <img
                        width={55}
                        height={45}
                        src="https://res.cloudinary.com/dq4fvmcte/image/upload/v1648564410/Madison%20Brown/address_icon_f3tfxu.png"
                        alt=""
                      />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div> */}
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
    </>
  )
}

export default Contact
