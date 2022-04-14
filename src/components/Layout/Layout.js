import React from "react"
import Footer from "./Footer"
import Header from "./Header"

function Layout({ children, socialLinks }) {
  return (
    <>
      <Header social_links={socialLinks} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
