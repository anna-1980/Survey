import React from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import ForwardButton from '../components/ForwardButton';
import BackButton from '../components/BackButton';

const Question1 = ({userNameInput}) => {
    let navigate = useNavigate();
    console.log(userNameInput)
    const goBack = (e) => {
        console.log('go back')
        navigate(-1);
    }

    const question1Next = (e) => {
        navigate( `/question2` );
        console.log("go to question2");
      }

  return (
    <>
         <h3>Question1</h3>
         <h2>How often do you visit this website</h2>

        <ForwardButton onClick={question1Next} 
          value="NEXT"/>
        <BackButton   onClick={goBack} 
          value="BACK"/>
    </>
  )
}

export default Question1