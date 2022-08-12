import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import ForwardButton from '../components/ForwardButton';
import BackButton from '../components/BackButton';
import DropDown from '../components/DropDown'

const Question3 = ({userNameInput, setQuestion3Answer}) => {
    let navigate = useNavigate();

    console.log(userNameInput+ 'from Question3')
    const goBack = (e) => {
        console.log('go back')
        navigate(-1);}

    const question3Next = (e) => {
        navigate( `/results` );
        console.log("go to results");
        setQuestion3Answer(localStorage.getItem("Question3Score"));
        }

  return (
  <>
     <h3>Question 3</h3>
    <h2>Where are you from?</h2>
        <div className='surveyQuestions'>
            <DropDown />
        </div>
    <ForwardButton onClick={question3Next} 
          value="FINISH"/>
    <BackButton   
        onClick={goBack} 
        value="BACK" />
    </>
  )
}

export default Question3