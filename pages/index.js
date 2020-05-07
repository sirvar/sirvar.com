import React from "react"

import Layout from "../components/layout"
import Head from 'next/head'

import Biography from '../components/biography'
import Experience from '../components/experience'

const IndexPage = () => (
  <Layout>
    <Head>
        <title>Rikin Katyal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Biography />
    <Experience />
  </Layout>
)

export default IndexPage
