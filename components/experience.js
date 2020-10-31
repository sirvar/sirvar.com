import React from "react"
import styled from 'styled-components'
import Post from './post'

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

const ExperienceView = ({ blogs }) => (
  <Experience>
    <Experience.Heading>Blog</Experience.Heading>
    {blogs.map(blog => (<Post {...blog} />))}
  </Experience>
)

export default ExperienceView