import { useEffect, useState } from 'react';

const DropDown = () => {

const chooseCountry = (e) => {
    console.log(e.target.value)
}
    // useEffect(() => {
      
    //  }, [ ])
 

  return (
    <>
        <nav className='dropDown'>
            <ul className='choice1'>Germany</ul>
            <ul className='choice1'>Sweden</ul>
            <ul className='choice1'>Italy</ul>
            <ul className='choice1'>Spain</ul>
        </nav>
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