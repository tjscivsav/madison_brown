import React from "react"
import Layout from "../components/Layout/Layout"
import PageTitle from "../components/PageTitle"
import data from "../../site/data/partnres.json"
import * as partnersStyle from "../../styles/partners.module.css"

function retailpartners() {
  return (
    <Layout>
      <PageTitle title="Retail Partners" />
      <div className="container-fluid bg_sandal pb-5">
        <div className="page_header">All Partners</div>
        <div className="container">
          <div className="row">
            {data?.partners.map((item, i) => (
              <div key={i} className={`col ${partnersStyle.partner}`}>
                <img src={item.img} alt={item.name} />
                <h5>{item.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default retailpartners
