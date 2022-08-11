import React from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import ForwardButton from '../components/ForwardButton';
import BackButton from '../components/BackButton';

const Question2 = ({userNameInput}) => {
    let navigate = useNavigate();
    console.log(userNameInput+ 'from Question2')
    const goBack = (e) => {
        console.log('go back')
        navigate(-1);}

    const question2Next = (e) => {
        navigate( `/question3` );
        console.log("go to question3");
        }

  return (
    <>
    <h3>Question 2</h3>
    <h2>Please select at least one option</h2>
    <ForwardButton onClick={question2Next} 
          value="NEXT"/>
    <BackButton   
        onClick={goBack} 
        value="BACK"
       />
    </>
    
  )
}

export default Question2