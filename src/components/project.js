import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './common/card'
import { getStars, getNPMDownloads } from '../services/stats'

import star from '../images/star.svg'
import download from '../images/download.svg'

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

const StarIcon = styled(star)`
  color: #9C9DA1;
  width: 0.85em;
  margin-right: 0.25em;
`

const DownloadIcon = styled(download)`
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

  if (stars) {
    getStars(stars)
    .then(starValue => setStat(starValue))
  }

  if (npmDownloads) {
    getNPMDownloads(npmDownloads)
    .then(downloadValue => {
      const rounded = Math.floor((downloadValue / 1000)) * 1000
      const formatted = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      setStat(formatted)
    })
  }

  return (
    <Project href={link} target='_blank'>
      <Card>
        <Card.Tag>{ technology }</Card.Tag>
        <Card.Title>{ name }</Card.Title>
        <Card.Description>{ description }</Card.Description>
        <Project.Stats>
          {stars && <>
            <StarIcon />
            <Project.Stats.Value>{ stat }</Project.Stats.Value>
          </>}
          {downloads && <>
            <DownloadIcon />
            <Project.Stats.Value>{ downloads }</Project.Stats.Value>
          </>}
          {npmDownloads && <>
            <DownloadIcon />
            <Project.Stats.Value>{ stat }+</Project.Stats.Value>
          </>}
        </Project.Stats>
      </Card>
    </Project>
  )
}
export default CardView