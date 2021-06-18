import React from "react";

import Layout from "../components/layout";
import Head from "next/head";

import Biography from "../components/biography";
import Experience, { projects } from "../components/experience";

import { github } from "./api/github";
import { npm } from "./api/npm";

const IndexPage = ({ projects }) => (
  <Layout>
    <Head>
      <title>Rikin Katyal</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Let me tell you a little bit about myself. I'm currently working as a Software Developer @ Cover. I've been writing code for 7+ years working with various different languages and technologies, most notably; JavaScript, Java, and Python. In my free time, I enjoy travelling, photography, video games, and music."
      ></meta>
    </Head>
    <Biography />
    <Experience projects={projects} />
  </Layout>
);

export async function getStaticProps() {
  await Promise.all(
    projects.map(async (project) => {
      let value = project.value;
      if (project.api == "github") {
        value = await github(value);
      } else if (project.api == "npm") {
        value = await npm(value);
      }
      if (value) {
        project.stats = value;
      }
    })
  );
  return {
    props: {
      projects,
    }, // will be passed to the page component as props
    revalidate: 60,
  };
}

export default IndexPage;
