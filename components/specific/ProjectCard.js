export default (props) => {
  return (
    <div className="project">
      <p><a href={ props.link } target="_blank">{ props.title }</a> - { props.technologies }</p>
      <p>{ props.description }</p>
      <style jsx>{`
        .project {
          margin: 0 20px 10px 0;
          width: 45%;
        }
        .project p {
          margin: 10px 0 !important;
        }

        @media (max-width: 600px) {
          .project {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}