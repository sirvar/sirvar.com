export default (props) => {
  return (
    <div className="work">
      <p>{ props.position } at <b>{ props.company }</b></p>
      <p><i>{ props.timeline }</i></p>
      <style jsx>{`
        .work {
          margin: 0 20px 10px 0;
          width: 45%;
        }
        .work p {
          margin: 10px 0 !important;
        }

        @media (max-width: 600px) {
          .work {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}