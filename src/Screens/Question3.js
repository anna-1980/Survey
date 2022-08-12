import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import ForwardButton from '../components/ForwardButton';
import BackButton from '../components/BackButton';
import DropDown from '../components/DropDown';
import ProgressBar from '../components/ProgressBar';

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
  <div className='mainContainer'>
    <div className='frame'>
        {userNameInput ? (<h3 className='userName'>SURVEY FOR: {JSON.parse(userNameInput).toUpperCase()}</h3>) : (<h3 className='userName'>SURVEY FOR:</h3>) }
    </div>
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

    <ProgressBar question3 />
    </div>
  )
}

export default Question3