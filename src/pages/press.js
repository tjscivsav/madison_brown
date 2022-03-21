import React from "react"
import ImageBox from "../components/ImageBox"
import Layout from "../components/Layout/Layout"
import PageTitle from "../components/PageTitle"
import data from "../../site/data/press.json"
function press() {
  return (
    <Layout>
      <PageTitle title="Press" />
      <div
        style={{ paddingBottom: "8rem" }}
        className="container-fluid bg_sandal"
      >
        <div className="page_header">All Press</div>
        <ImageBox data={data?.press} />
      </div>
    </Layout>
  )
}

export default press
