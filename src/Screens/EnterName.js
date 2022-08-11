import {useState, useEffect} from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import ForwardButton from '../components/ForwardButton';
import BackButton from '../components/BackButton';

const EnterName = ({userNameInput, setUserName}) => {

    let navigate = useNavigate();
    
    const goBack = (e) => {
        console.log('go back')
        navigate(-1);
    }

    const enterNameNext = (e) => {
        navigate( `/question1` );
        console.log("go to question1");
        
      }

    const inputTextHandler = (e) => {
        // setUserName(e.target.value);
        console.log(e.target.value);
        setUserName(localStorage.setItem("userName", JSON.stringify(e.target.value)));
        console.log("handle input field" + userNameInput);
    };

 
  return (
    <div className='mainContainer'> 
        <h3>who are you ?</h3>
        <h2>Please enter your name.</h2>
        <input 
        className='enterName' 
        type="text" 
        onChange={inputTextHandler}/>
        <ForwardButton onClick={enterNameNext} 
        value="NEXT"/>
        <BackButton   onClick={goBack} 
        value="BACK"/>

    </div>
  )
}

export default EnterName