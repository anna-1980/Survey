import React from 'react'

const ProgressBar = ({question1, question2, question3}) => {
    
  return (
    <div >
      
       {question1 ? (
        <div >
            <h4 className='progresTrack'>QUESTION 1 OUT OF 3</h4>
            <div className='progresBarContainer'>
                <div 
                    className='progresBar'
                    style={{width: 33+"%"}}>
                </div>  
                
            </div>
        </div>
       ) : (<span></span>)}

       {question2 ? (
        <div >
            <h4 className='progresTrack'>QUESTION 2 OUT OF 3</h4>
            <div className='progresBarContainer'>
                <div 
                    className='progresBar'
                    style={{width: 33+"%"}}>
                </div>  
                
            </div>
        </div>
       ) : (<span></span>)}

       {question3 ? (
        <div >
            <h4 className='progresTrack'>QUESTION 3 OUT OF 3</h4>
            <div className='progresBarContainer'>
                <div 
                    className='progresBar'
                    style={{width: 33+"%"}}>
                </div>  
                
            </div>
        </div>
       ) : (<span></span>)}
 
    </div>
  )
}

export default ProgressBar