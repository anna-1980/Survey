import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import ForwardButton from '../components/ForwardButton';
import BackButton from '../components/BackButton';
import DropDown from '../components/DropDown'

const Results = ({userNameInput, finalScore}) => {
    let navigate = useNavigate();

    console.log(userNameInput+ 'from Results')
    const goBack = (e) => {
        console.log('go back')
        navigate(-1);}

    const resultsNext = (e) => {
        navigate( `/` );
        console.log("reset");
        localStorage.clear();
        }

  return (
    <>
    <h3>RESULT</h3>
    <h2>Your Score</h2>
    <h3>{JSON.parse(userNameInput).toUpperCase()}</h3>
    <br />
    <h2 className='finalPoints'>50</h2>
    <h4>Points</h4>
   
    <ForwardButton onClick={resultsNext} 
          value="START NEW"/>
    <BackButton   
        onClick={goBack} 
        value="BACK" />
    </>
  )
}

export default Results