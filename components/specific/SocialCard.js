export default (props) => {
  return (
    <p>
      &nbsp;&nbsp;{ props.emoji } <a href={ props.link }>{ props.website }</a>
      <style jsx>{` margin: 10px 0 !important `}</style>
    </p>
  )
}