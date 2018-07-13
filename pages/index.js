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

export default () => {
  return (
    <div>
      <Head title="Rikin Katyal" />
      <InfoSection title="Work Experience 🏢">
        { Work }
      </InfoSection>
      <InfoSection title="Projects 💻">
        { Project  }
        <p>You can find these projects and more on my <a href="https://github.com/sirvar" target="_blank">GitHub</a></p>
      </InfoSection>
      <InfoSection title="Skills 🛠">
        { Skill }
      </InfoSection>
    </div>
  )
}