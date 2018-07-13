import styled from 'styled-components'

const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 50%;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 10px;
`

export default (props) => {
  return (
    <div>
      <h2>{ props.title }</h2>
      <InfoDiv>
        { props.children }
      </InfoDiv>
    </div>
  )
}