import React from 'react'

const ForwardButton = ({value, onClick, type}) => {
  return (
    <button
    onClick={() => onClick()}
    type={type}
    >{value}</button>
  )
}

export default ForwardButton