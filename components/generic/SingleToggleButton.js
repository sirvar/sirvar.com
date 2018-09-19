export default (props) => {
  return (
    <button onClick={ props.onClick }>
      { props.active ? props.on : props.off }
      <style jsx>{` 
        position: absolute;
        top: 10px;
        right: 0px;
        width: 50px;
        height: 30px;
        background-color: rgba(0,0,0,0);
        font-size: 16px;
        color: ${ props.active ? "#3f3f3f" : "#FFFFFF" };
        cursor: pointer;
        outline: none;
        border: none;
      `}</style>
    </button>
  )
}