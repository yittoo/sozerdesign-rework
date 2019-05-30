import React from "react"

import Layout from "../hoc/Layout/Layout"
import Header from "../components/Header/Header"
import HireMe from "../components/HireMeBanner/HireMe"
import IndexContainer from "../containers/index"

import Helmet from "../components/HelmetGenerator/HelmetGenerator";
import About from "../containers/index/components/About"
import "./index.scss"

const Index = () => {
  return (
    <Layout>
      <Helmet title="Welcome"></Helmet>
      <div className="InitialBackground">
        <HireMe />
        <Header />
        <About />
      </div>
      <IndexContainer />
    </Layout>
  )
}

export default Index
