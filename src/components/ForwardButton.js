import React from 'react'

const ForwardButton = ({value, onClick}) => {
  return (
    <button
    onClick={() => onClick()}>{value}</button>
  )
}

export default ForwardButton