import { useEffect, useState } from 'react';

const DropDown = () => {
  const [state, setState] = useState();
  const [isActive, setIsActive] = useState(false);
  const [selectCountry, setSelectCountry] = useState('')
  const countries = ["Germany", "Sweden", "Italy", "Spain" ]
  const chooseCountry = (e) => {
    console.log(e.target.value)
    console.log(e.target.textContent)
     
    }

//   const handleChange = (e) => {
//     setState(e.target.value);
//     }

//   const  handleSubmit = (e) => {
//     alert('Your favorite flavor is: ' + state);
//     e.preventDefault();
//     }
  return (
    <>
    {/* <form action="submit">
    <div className="select">
       <select 
        id="country" 
        name="country" 
        className="selectCountry" 
        onChange={chooseCountry}>
            <option value="Germnay">Germnay</option>
            <option value="Sweden">Sweden</option>
            <option value="Italy">Italy</option>
            <option value="Spain">Spain</option>
        </select>
    </div> 
    </form> */}
    <div className='dropDownContainer'>
        <div className="dropDown">
            <div 
              className='dropDownBtn'
              onClick={(e) => {setIsActive(!isActive)}}
              >{selectCountry ? (<div>{selectCountry}</div>) : "Choose one"} 
            <div>&#9660;</div>
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

{/* <>
<label for="country">Please choose your country?</label>

<select id="country" name="country" onChange={chooseCountry}>
<option value="Germnay">Germnay</option>
<option value="Sweden">Sweden</option>
<option value="Italy">Italy</option>
<option value="Spain">Spain</option>
</select>

</> */}