
const ForwardButton = ({value, iconValue, onClick, type}) => {

  return (
    <button
    onClick={() => onClick()}
    type={type}
    >{value}
    {iconValue}
    </button>
  )
}

export default ForwardButton