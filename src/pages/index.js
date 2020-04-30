import React from "react"

import Layout from "../components/layout"
import SEO from "../components/common/seo"
import Biography from '../components/biography'
import Experience from '../components/experience'

const IndexPage = () => (
  <Layout>
    <SEO title="Rikin Katyal" />
    <Biography />
    <Experience />
  </Layout>
)

export default IndexPage
