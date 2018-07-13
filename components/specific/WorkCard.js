import styled from 'styled-components'

const WorkDiv = styled.div`
  margin: 0 20px 10px 0;
  width: 45%;
`

export default (props) => {
  return (
    <WorkDiv>
      <p>{ props.position } at <b>{ props.company }</b></p>
      <p><i>{ props.timeline }</i></p>
    </WorkDiv>
  )
}