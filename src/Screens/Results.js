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
        
        }

  return (
    <>
    <h3>Question 3</h3>
    <h2>Where are you from?</h2>

   
    <ForwardButton onClick={resultsNext} 
          value="START NEW"/>
    <BackButton   
        onClick={goBack} 
        value="BACK" />
    </>
  )
}

export default Results