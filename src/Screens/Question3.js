import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import ForwardButton from '../components/ForwardButton';
import BackButton from '../components/BackButton';
import DropDown from '../components/DropDown';
import ProgressBar from '../components/ProgressBar';
import { ArrowCircleRight } from "phosphor-react";

const Question3 = ({userNameInput, setQuestion3Answer}) => {
    let navigate = useNavigate();

    console.log(userNameInput+ 'from Question3')
    const goBack = (e) => {
        console.log('go back')
        navigate(-1);}

    const question3Next = (e) => {
        console.log("go to results");
        setQuestion3Answer(localStorage.getItem("Question3Score"));
        localStorage.getItem("Question3Score") ? navigate( `/results` ) : alert('please choose one country')
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
          value="FINISH"
          iconValue={<ArrowCircleRight size={32} />}
          />
    <BackButton   
        onClick={goBack} 
        value="BACK" />

    <ProgressBar question3 />
    </div>
  )
}

export default Question3