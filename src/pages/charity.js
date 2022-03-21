import React from "react"
import Layout from "../components/Layout/Layout"
import PageTitle from "../components/PageTitle"
import data from "../../site/data/charities.json"
import ImageBox from "../components/ImageBox"

function charity() {
  return (
    <Layout>
      <PageTitle title="Charity" />
      <div
        style={{ paddingBottom: "8rem" }}
        className="container-fluid bg_sandal"
      >
        <div className="page_header">All Charities</div>
        <ImageBox data={data?.charities} />
      </div>
    </Layout>
  )
}

export default charity
