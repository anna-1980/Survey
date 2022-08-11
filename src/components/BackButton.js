import React from 'react'

const BackButton = ({value, onClick, className}) => {
  return (
    <button
    onClick={() => onClick()}
    className={'backButton'}
    >{value}</button>
  )
}

export default BackButton