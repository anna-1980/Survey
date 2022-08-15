import { useState } from 'react';

const DropDown = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectCountry, setSelectCountry] = useState('')
  const countries = ["Germany", "Sweden", "Italy", "Spain" ]

  return (
    <>
    <div className='dropDownContainer'>
        <div className="dropDown">
            <div 
              className='dropDownBtn'
              onClick={(e) => {setIsActive(!isActive)}}
              >{selectCountry ? (<div>{selectCountry}</div>) : "Choose one"} 
            <div id='dropDownArrow'>&#9660;</div>
            </div>
           {isActive && (
             <div className="dropDownContent" >
               { countries.map((option, index)=>(
                <div
                    className='dropDownItem'
                    key={index} 
                    onClick={(e) =>{
                    setSelectCountry(option);
                    setIsActive(false);
                    console.log(selectCountry);
                    localStorage.setItem("Question3Score", option);
                  }} 
                 >{option}</div>
               ))}
             
             
         </div>
           )}
        </div>
     </div>
    </>
  )
}

export default DropDown

