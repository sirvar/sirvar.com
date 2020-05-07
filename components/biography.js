import React from "react"
import styled from 'styled-components'

import Contact from './contact'

const Biography = styled.div`
  position: fixed;
  width: 35%;
  padding: 5em;
  @media (max-width: 980px) {
    position: relative;
    padding: 3em;
    width: calc(100% - 6em);
  }
`

Biography.Heading = styled.h1`
  color: white;
  font-family: 'Poppins', 'Helvetica', 'Arial', 'Sans Serif';
  font-size: 4rem;
  margin: 0;
  line-height: 1.1;
  @media (max-width: 980px) {
    font-size: 3em;
  }
`

Biography.Description = styled.p`
  color: #9C9DA1;
  font-size: 0.9rem;
  line-height: 2;
  margin: 2em 0;
  width: 90%;
  @media (max-width: 980px) {
    width: 100%;
  }
`

Biography.Highlight = styled.span`
  color: white;
  text-decoration: underline;
`

const BiographyView = () => (
  <Biography>
    <Biography.Heading>
      Hi, I'm <br></br>Rikin Katyal.
    </Biography.Heading>
    <Biography.Description>
      I'm a <Biography.Highlight>Full Stack Developer</Biography.Highlight> and currently a 4th year Honours Computer Science student at the University of Windsor. 
      I've been writing code for 6+ years working with various different languages and technologies, 
      most notably; <Biography.Highlight>Java</Biography.Highlight>, <Biography.Highlight>JavaScript</Biography.Highlight>, 
      and <Biography.Highlight>Python</Biography.Highlight>. In my free time, I enjoy travelling, video games, and music.
    </Biography.Description>
    <Contact />
  </Biography>
)

export default BiographyView