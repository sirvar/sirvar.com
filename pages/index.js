import React from "react"

import Layout from "../components/layout"
import Head from 'next/head'

import Biography from '../components/biography'
import Experience from '../components/experience'

const IndexPage = ({ blogs }) => (
  <Layout>
    <Head>
        <title>Rikin Katyal</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Hi, I'm Rikin Katyal. I'm a Full Stack Developer and currently a 4th year Honours Computer Science student at the University of Windsor. I've been writing code for 6+ years working with various different languages and technologies, most notably; Java, JavaScript, and Python. In my free time, I enjoy travelling, video games, and music."></meta>
      </Head>
    <Biography />
    <Experience blogs={blogs} />
  </Layout>
)

export async function getStaticProps() {
  const fs = require("fs");
  const matter = require("gray-matter");
  // const { v4: uuid } = require("uuid");

  const files = fs.readdirSync(`${process.cwd()}/blog`, "utf-8");

  const blogs = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/blog/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data, content } = matter(rawContent);
      return { ...data, content };
    });

    // By returning { props: blogs }, the IndexPage component
  // will receive `blogs` as a prop at build time
  return {
    props: { blogs },
  };
}

export default IndexPage
