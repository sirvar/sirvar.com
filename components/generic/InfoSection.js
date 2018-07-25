export default (props) => {
  return (
    <div>
      <h2>{ props.title }</h2>
      <div>
        { props.children }
        <style jsx>{` 
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          flex-basis: 50%;
          justify-content: space-between;
          margin: 0;
          margin-bottom: 10px;
        `}</style>
      </div>
    </div>
  )
}