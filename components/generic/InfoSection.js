import styled from 'styled-components'

const InfoDiv = styled.div`
`

export default (props) => {
  return (
    <InfoDiv>
      <h2>{ props.title }</h2>
      { props.children }
    </InfoDiv>
  )
}