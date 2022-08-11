import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import ForwardButton from '../components/ForwardButton';
import BackButton from '../components/BackButton';

const Question3 = ({userNameInput, setQuestion3Answer}) => {
    let navigate = useNavigate();

    console.log(userNameInput+ 'from Question3')
    const goBack = (e) => {
        console.log('go back')
        navigate(-1);}

    const question2Next = (e) => {
        navigate( `/summary` );
        console.log("go to summary");
        setQuestion3Answer(localStorage.getItem("Question3Score"));
        }

  return (
  <>
     <h3>Question 3</h3>
    <h2>Where are you from?</h2>
    <ForwardButton onClick={question2Next} 
          value="NEXT"/>
    <BackButton   
        onClick={goBack} 
        value="BACK" />
    </>
  )
}

export default Question3