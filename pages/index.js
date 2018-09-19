import Head from '../components/head'
import InfoSection from '../components/generic/InfoSection'
import ToggleButton from '../components/generic/SingleToggleButton'
import WorkCard from '../components/specific/WorkCard'
import ProjectCard from '../components/specific/ProjectCard'
import SocialCard from '../components/specific/SocialCard'

const workInfo = [
  {
    "position": "Full Stack Developer",
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
    "description": "A scalable utility for serverless remote torrenting"
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
      <p>
        { skill.list }
        <style jsx>{` line-height: 28px; `}</style>
      </p>
    </div>
  )
})

const socialLinks = [
  {
    "emoji": "🐱",
    "website": "GitHub",
    "link": "https://github.com/sirvar"
  },
  {
    "emoji": "🐦",
    "website": "Twitter",
    "link": "https://twitter.com/sirvar_"
  },
  {
    "emoji": "🔗",
    "website": "LinkedIn",
    "link": "https://www.linkedin.com/in/sirvar/"
  },
  {
    "emoji": "😇",
    "website": "Angel",
    "link": "https://angel.co/sirvar"
  },
  {
    "emoji": "📑",
    "website": "StackOverflow",
    "link": "https://stackoverflow.com/users/3150094/sirvar"
  }
]

const Social = socialLinks.map((social, i) => {
  return (
    <SocialCard {...social} />
  )
})

class App extends React.Component {
  constructor() {
    super()
    console.log("donate:")
    console.log("%cbtc: 3HNd76oCjTqdAhoZUB55RACcoEsQW97sNn", "color: #FF9900")
    console.log("%ceth: 0xfa84d06f553447d317e75dfb49a4d3175a5a993b", "color: #3C3C3D")
    console.log("%cltc: LXz73gdkwt1qzCUv4teUjVxCho5SMgoTPv", "color: #d3d3d3")
    console.log("%cbtc: lol", "color: #ee8c28")

    this.state = {
      light: true
    }
  }
  
  render() {
    var light = this.state.light
      return (
      <div className="container">
        <style jsx global>{`
          body {
            font-family: "IBM Plex Sans", "Helvetica", "Arial";
            margin: 0;
            color: ${ light ? "#3f3f3f" : "#FFFFFF" };
            width: 100%;
            height: 100%;
            background-color: ${ light ? "#FFFFFF" : "#3f3f3f" };
          }
          h1 {
            font-weight: 700;
            font-size: 30px;
            margin: 0;
          }
          h2 {
            font-weight: 700;
            font-size: 22px;
            margin: 0;
          }
          h3 {
            font-weight: 700;
            font-size: 18px;
            margin: 0;
            margin-top: 10px;
          }
          p {
            font-size: 16px;
            margin: 10px 0;
          }
          a {
            color: #25B394;
          }
          b {
            color: #25B394;
          }
          h3 a {
            text-decoration: none;
          }
          .container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
          }
          .about {
            width: 30%;
            min-width: 350px;
            padding: 20px;
            box-sizing: border-box;
            text-align: center;
          }
          .about p {
            line-height: 28px;
            margin: 24px 0;
          }
          .social {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
          }
          .info {
            width: 65%;
            padding: 20px;
            box-sizing: border-box;
          }
          .info p {
            margin-bottom: 24px;
          }
          @media (max-width: 800px) {
            .container {
              flex-direction: column;
            }
            .about {
              text-align: left;
              width: 100%;
            }
            .info {
              width: 100%;
            }
            #copyright {
              display: none;
            }
          }
        `}</style>
        <Head title="Rikin Katyal" />
        <div className="about">
          <h1>Hey! 👋 I'm Rikin Katyal</h1>
          <p>I'm a 19 year old software developer from Canada 🇨🇦working at <a href="https://uniquid.com" target="_">UniquID</a> 👨🏽‍💻and studying Computer Science at the <a href="http://www.uwindsor.ca/" target="_">University of Windsor</a> 🎓</p>
          <p>You can find me on social media 📱, usually under the username <b><i>sirvar</i></b>. I get a lot of questions about that alias/nickname. Why <b><i>sirvar</i></b>?</p>
          <p>It actually has <b>2</b> meanings, both really geeky. First, if you say it <i>really</i> fast, it sounds like server 🖥. Second, if you break it up, it becomes Sir Var 👨🏽‍⚖️; a respected variable 😜</p>
          <p>Feel free to reach out to me via email at <a href="mailto:me@sirvar.com">me@sirvar.com</a> ✉️ or checkout my <a href="/static/resume.pdf">resume</a> 📄</p>
          <p>Or you can connect with me here:</p>
          <div className="social">
            { Social }
          </div>
          <p id="copyright">&copy; {(new Date().getFullYear())} Rikin Katyal</p>
        </div>
        <div className="info">
          <InfoSection title="Work Experience 🏢">
            { Work }
          </InfoSection>
          <InfoSection title="Projects 💻">
            { Project  }
          </InfoSection>
          <p>You can find these projects and more on my <a href="https://github.com/sirvar" target="_blank">GitHub</a></p>
          <InfoSection title="Skills 🛠">
            { Skill }
          </InfoSection>
        </div>
        <ToggleButton
          on="💡"
          off="💡"
          active={ this.state.light }
          onClick={() => { this.setState({ light: !this.state.light }) }}
        />
      </div>
    )
  }
}

export default App