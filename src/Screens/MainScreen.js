import React from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import ForwardButton from '../components/ForwardButton';
import BackwardButton from '../components/BackButton'

const MainScreen = ({userNameInput}) => {

  let navigate = useNavigate();
  
  const startSurvey = (e) => {
    navigate( `/enterName` );
    console.log("start Survey button")
  }

  return (
    <>
 
     <h1>Welcome to our Survey.</h1>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
        et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non 
        numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit</p>
        <ForwardButton 
        onClick={startSurvey} 
        value="NEXT"/>
     
    </>
  )
}

export default MainScreen