import React from "react"
import Layout from "../components/Layout/Layout"
import PageTitle from "../components/PageTitle"
import * as AboutStyle from "../../styles/about.module.css"

function About() {
  return (
    <Layout>
      <PageTitle title="About us" />
      <div className={`container-fluid  ${AboutStyle.about_content}`}>
        <p className={AboutStyle.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
          orci tellus urna egestas duis lacinia eget sit bibendum. Nunc pretium
          nibh pellentesque non tortor. Mattis nulla elementum pellentesque
          integer eget feugiat sed. Proin a nisi augue scelerisque enim non.
          Tempor scelerisque commodo, vestibulum varius. Varius nulla
          sollicitudin in justo sit magna. Fermentum sed vitae, enim massa orci
          rutrum imperdiet sed. Vitae enim, id aliquam mattis viverra pulvinar
          facilisis. Integer massa in orci sagittis. Habitant morbi pulvinar ac
          vestibulum urna cursus malesuada. Magna morbi viverra ultricies
          venenatis dictum facilisi risus quis dignissim. Dui amet sit magnis
          gravida erat ullamcorper. Et consectetur facilisis elementum aliquam
          odio feugiat et, ut varius. Vulputate nibh risus ac a donec sed
          elementum sed sagittis.
        </p>
        <div className="mx-5">
          <div className={AboutStyle.img_section}>
            <img
              src="https://res.cloudinary.com/dq4fvmcte/image/upload/v1647851531/Madison%20Brown/ceo_img_wvy5ac.png"
              alt=""
            />
            <div className={AboutStyle.red_dot}></div>
          </div>
          <h5 className="mt-5">Jessica William</h5>
          <h6 className="mb-5">CEO Madison Brown</h6>
        </div>
        <p className={AboutStyle.para2}>
          Elementum et eget convallis a, praesent porttitor imperdiet.
          Adipiscing amet pellentesque sapien, eget sapien sit sed. Turpis mi
          sed dolor sit porttitor. Odio in hac nibh elit aliquet consequat,
          proin porta sed. Vitae molestie amet, eu dignissim cursus porttitor
          enim duis. Tincidunt commodo amet duis amet elit tellus massa
          ullamcorper pharetra. Viverra amet sed nunc, non. Proin turpis
          bibendum nec ullamcorper donec. Commodo ut scelerisque massa diam,
          tempus. Turpis pharetra viverra velit nec est. At in cras mattis
          cursus. Commodo ultricies platea lorem aliquam rhoncus, nisi, quam
          cursus. Eget feugiat quam integer amet dolor. Imperdiet quis lobortis
          libero dolor aliquam augue mi ut.
        </p>
      </div>
    </Layout>
  )
}

export default About
