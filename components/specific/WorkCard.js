export default (props) => {
  return (
    <div>
      <p>{ props.position } at <b>{ props.company }</b></p>
      <p><i>{ props.timeline }</i></p>
    </div>
  )
}