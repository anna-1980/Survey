import React from 'react'

const ProgressBar = ({question1, question2, question3}) => {
    
  return (
    <div >
        <div 
            className='progresBarContainer'>
       {question1 ? (
         <div 
            className='progresBar'
            style={{width: 33+"%"}}></div>    
         
       ) : (<span></span>)}

      {question2 ? (
         <div 
            className='progresBar'
            style={{width: 66 + "%"}}></div>    
         
       ) : (<span></span>)}

      {question3 ? (
         <div 
            className='progresBar'
            style={{width: 100 + "%"}}></div>    
         
       ) : (<span></span>)}


       </div>
    </div>
  )
}

export default ProgressBar