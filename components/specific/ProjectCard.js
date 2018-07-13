export default (props) => {
  return (
    <div>
      <p><a href={ props.link } target="_blank">{ props.title }</a> - { props.technologies }</p>
      <p>{ props.description }</p>
    </div>
  )
}