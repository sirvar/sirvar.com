import styled from 'styled-components'

import Head from '../components/head'
import InfoSection from '../components/generic/InfoSection'
import WorkCard from '../components/specific/WorkCard'
import ProjectCard from '../components/specific/ProjectCard'

const workInfo = [
  {
    "position": "Software Developer",
    "company": "UniquID",
    "timeline": "June 2018 - Present"
  },
  {
    "position": "JavaScript Developer",
    "company": "Murcul",
    "timeline": "August 2017 - June 2018"
  },
  {
    "position": "React Native Developer",
    "company": "Drops",
    "timeline": "June 2017 - August 2017"
  },
  {
    "position": "Frontend Developer",
    "company": "Kuririi",
    "timeline": "July 2016 - December 2017"
  },
]

const Work = workInfo.map((work, i) => {
  return <WorkCard {...work} />
})

const projectInfo = [
  {
    "title": "sendit ✈️",
    "link": "https://github.com/sirvar/sendit",
    "technologies": "Bash Shell",
    "description": "A serverless remote torrenting utility"
  },
  {
    "title": "backend-proxy 🔙",
    "link": "https://github.com/murcul/backend-proxy",
    "technologies": "JavaScript, Node.js",
    "description": "A command line utility that proxies a backend API"
  },
  {
    "title": "robin 🐧",
    "link": "https://github.com/sirvar/robin",
    "technologies": "Java, Android",
    "description": "Single sign on login system for Android"
  },
]

const Project = projectInfo.map((project, i) => {
  return <ProjectCard {...project} />
})

const skillInfo = [
  {
    "title": "Languages 📚",
    "list": "JavaScript, Java, Python, C, Bash, SQL, PHP, HTML, CSS"
  },
  {
    "title": "Tools & Libraries 🔨",
    "list": "React.js, React Native, Android, Node.js, Redux, TypeScript, Flow, Next.js, Gatsby.js, Git, SVN, Trello, JIRA"
  }
]

const Skill = skillInfo.map((skill, i) => {
  return (
    <div>
      <h3>{ skill.title }</h3>
      <p>{ skill.list }</p>
    </div>
  )
})

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`

const About = styled.div`
  width: 30%;
  min-width: 350px;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
`

const AboutP = styled.p`
  line-height: 28px;
  margin: 24px 0;
`

const GitHubP = styled.p`
  margin-bottom: 24px;
`

const Info = styled.div`
  width: 65%;
  padding: 20px;
  box-sizing: border-box;
`

export default () => {
  return (
    <Container>
      <Head title="Rikin Katyal" />
      <About>
        <h1>Hey! 👋 I'm Rikin Katyal</h1>
        <AboutP>I'm a 19 year old software developer from Toronto, Canada 🇨🇦working at <a href="https://uniquid.com" target="_">UniquID</a> 👨🏽‍💻and studying Computer Science at the <a href="https://www.utoronto.ca/" target="_">University of Toronto</a> 🎓</AboutP>
        <AboutP>You can find me on social media 📱, usually under the username <b><i>sirvar</i></b>. I get a lot of questions about that alias/nickname. Why <b><i>sirvar</i></b>?</AboutP>
        <AboutP>It actually has <b>2</b> meanings, both really geeky. First, if you say it <i>really</i> fast, it sounds like server 🖥. Second, if you break it up, it becomes Sir Var 👨🏽‍⚖️; a respected variable 😜</AboutP>
        <AboutP>Feel free to reach out to me via email at <a href="mailto:me@sirvar.com">me@sirvar.com</a> ✉️</AboutP>
        {/* <AboutP>Or you can connect with me here:</AboutP> */}
      </About>
      <Info>
        <InfoSection title="Work Experience 🏢">
          { Work }
        </InfoSection>
        <InfoSection title="Projects 💻">
          { Project  }
        </InfoSection>
        <GitHubP>You can find these projects and more on my <a href="https://github.com/sirvar" target="_blank">GitHub</a></GitHubP>
        <InfoSection title="Skills 🛠">
          { Skill }
        </InfoSection>
      </Info>
    </Container>
  )
}