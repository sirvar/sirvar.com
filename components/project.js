import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from './common/card'

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
  icon,
  value,
  stats,
  api,
  technology,
  link
}) => {
  const [stat, setStat] = useState(0);

  useEffect(() => {
    if (stats) {
      setStat(stats)
    } else if (api == 'github') {
      fetch('/api/github?repo=' + value)
      .then(res => res.json())
      .then(data => setStat(data.stars))
    } else if (api == 'npm') {
      fetch('/api/npm?package=' + value)
      .then(res => res.json())
      .then(data => setStat(data.downloads))
    }
  }, []);

  return (
    <Project href={link} target='_blank'>
      <Card>
        <Card.Tag>{ technology }</Card.Tag>
        <Card.Title>{ name }</Card.Title>
        <Card.Description>{ description }</Card.Description>
        <Project.Stats>
          <>
            <Icon src={icon} />
            <Project.Stats.Value>{ stat }</Project.Stats.Value>
          </>
        </Project.Stats>
      </Card>
    </Project>
  )
}

export default CardView