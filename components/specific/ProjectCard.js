import styled from 'styled-components'

const ProjectDiv = styled.div`
  margin: 0 20px 10px 0;
  width: 45%;
`

export default (props) => {
  return (
    <ProjectDiv>
      <p><a href={ props.link } target="_blank">{ props.title }</a> - { props.technologies }</p>
      <p>{ props.description }</p>
    </ProjectDiv>
  )
}