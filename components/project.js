import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from './common/card'

const star = '/star.svg'
const download = '/download.svg'

const Project = styled.a`
  text-decoration: none;
`

Project.Stats = styled.div`
  display: flex;
  align-items: center;
  height: 1em;
`

Project.Stats.Value = styled.h5`
  margin: 0;
  color: #9C9DA1;
  font-size: 0.75rem;
`

const Icon = styled.img`
  color: #9C9DA1;
  width: 0.85em;
  margin-right: 0.25em;
`

const CardView = ({
  name,
  description,
  stars,
  downloads,
  npmDownloads,
  technology,
  link
}) => {
  const [stat, setStat] = useState(0);

  useEffect(() => {
    if (stars) {
      fetch('/api/github?repo=' + stars)
      .then(res => res.json())
      .then(data => setStat(data.stars))
    }
  
    if (npmDownloads) {
      fetch('/api/npm?package=' + npmDownloads)
      .then(res => res.json())
      .then(data => {
        const rounded = Math.round((data.downloads / 1000)) * 1000
        const formatted = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        setStat(formatted)
      })
    }
  }, []);

  return (
    <Project href={link} target='_blank'>
      <Card>
        <Card.Tag>{ technology }</Card.Tag>
        <Card.Title>{ name }</Card.Title>
        <Card.Description>{ description }</Card.Description>
        <Project.Stats>
          {stars && <>
            <Icon src={star} />
            <Project.Stats.Value>{ stat }</Project.Stats.Value>
          </>}
          {downloads && <>
            <Icon src={download} />
            <Project.Stats.Value>{ downloads }</Project.Stats.Value>
          </>}
          {npmDownloads && <>
            <Icon src={download} />
            <Project.Stats.Value>{ stat }+</Project.Stats.Value>
          </>}
        </Project.Stats>
      </Card>
    </Project>
  )
}

export async function getStaticProps() {
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      test: "yuo"
    }
  }
}

export default CardView