import React from 'react'
import styled from 'styled-components'

import me from '../images/me.jpg'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import email from '../images/email.svg'
import resume from '../images/resume.svg'
import sponsor from '../images/sponsor.svg'

const icons = [
  {
    asset: github,
    link: 'https://github.com/sirvar'
  },
  {
    asset: linkedin,
    link: 'https://linkedin.com/in/sirvar'
  },
  {
    asset: email,
    link: 'mailto:me@sirvar.com'
  },
  {
    asset: resume,
    link: 'static/resume.pdf'
  },
  {
    asset: sponsor,
    link: 'https://github.com/sponsors/sirvar'
  },
]

const Contact = styled.div`
  position: fixed;
  bottom: 5em;
  width: 35%;
  @media (max-width: 980px) {
    position: relative;
    width: 100%;
    bottom: 0;
  }
`

Contact.Profile = styled.img`
  border-radius: 50%;
  width: 4em;
  height: 4em;
`

Contact.Icons = styled.div`
  float: right;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 60%;
  height: 4em;
`

const ContactView = () => (
  <Contact>
    <Contact.Profile src={me} />
    <Contact.Icons>
      {icons.map(icon => {
        const IconAsset = styled(icon.asset)`
          color: white;
          width: 1.5em;
          transition: all .3s cubic-bezier(0.75, 0, 0.25, 1);
          &:hover {
            transform: scale(1.25);
          }
        `
        return (
          <a href={icon.link} target='_blank'><IconAsset /></a>
        )
      })}
    </Contact.Icons>
  </Contact>
)
export default ContactView