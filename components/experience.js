import React from "react"
import styled from 'styled-components'
import Project from './project'
import Work from './work'

const projects = [
  {
    name: 'BluetoothKit',
    description: 'BluetoothKit is an incredibly lightweight and simple open source library to interface with Bluetooth devices on Android.',
    stars: 'sirvar/bluetoothkit-android',
    technology: 'Android',
    link: 'https://github.com/sirvar/bluetoothkit-android'
  },
  {
    name: 'Quick Connect',
    description: 'A quick settings tile app that lets you quickly connect to a paired Bluetooth device such as a pair of headphones or a Bluetooth speaker.',
    downloads: '15,000+',
    technology: 'Android',
    link: 'https://play.google.com/store/apps/details?id=com.sirvar.quickconnect'
  },
  {
    name: 'robin',
    description: 'An Android login library that removes repetitive development of login & sign up UX and flows.',
    stars: 'sirvar/robin',
    technology: 'Android',
    link: 'https://github.com/sirvar/robin'
  },
  {
    name: 'backend-proxy',
    description: 'Backend proxy is a tool to route your REST API through a proxy.',
    npmDownloads: 'backend-proxy',
    technology: 'JavaScript',
    link: 'https://github.com/sirvar/bluetoothkit-android'
  }
]

const work = [
  {
    company: "Yodi",
    position: "Full Stack Developer",
    date: "Jan 2020 - Present"
  },
  {
    company: "Lokally",
    position: "Full Stack Developer",
    date: "May 2019 - Dec 2019"
  },
  {
    company: "UniquID",
    position: "Full Stack Developer",
    date: "Jun 2018 - Sep 2019"
  },
  {
    company: "Murcul",
    position: "JavaScript Developer",
    date: "Aug 2017 - Jun 2018"
  },
  {
    company: "Drops",
    position: "React Developer",
    date: "Jun 2017 - Aug 2017"
  },
  {
    company: "Kuririi",
    position: "Web Developer",
    date: "Jul 2016 - May 2017"
  },
]

const Experience = styled.div`
  margin-left: 40%;
  width: 60%;
  padding: 5em;

  @media (max-width: 980px) {
    margin-left: 0;
    padding: 3em;
    padding-top: 0;
    width: calc(100% - 6em);
  }
`

Experience.Heading = styled.h2`
  color: white;
  font-family: 'Poppins', 'Helvetica', 'Arial', 'Sans Serif';
  font-size: 2rem;
  margin: 0;
`

const ExperienceView = () => (
  <Experience>
    <Experience.Heading>Projects</Experience.Heading>
    {projects.map(project => (<Project {...project} key={project.name} />))}
    <Experience.Heading>Work</Experience.Heading>
    {work.map(job => (<Work {...job} key={job.company} />))}
  </Experience>
)

export default ExperienceView