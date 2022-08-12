import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import ForwardButton from '../components/ForwardButton';
import BackButton from '../components/BackButton';
import ProgressBar from '../components/ProgressBar';

const Question2 = ({userNameInput, setQuestion2Answer}) => {
    let navigate = useNavigate();

//-----Component State-------------//  
const [checkedOne, setCheckedOne] = useState(false);
const [checkedTwo, setCheckedTwo] = useState(false);
const [checkedThree, setCheckedThree] = useState(false);
const [question2Score, setQuestion2Score] = useState();

const handleChangeOne = () => {
    setCheckedOne(!checkedOne);

  };

const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

const handleChangeThree = () => {
    setCheckedThree(!checkedThree);
  };
//-----Component State-------------//  

    console.log(userNameInput+ 'from Question2')
    const goBack = (e) => {
        console.log('go back')
        navigate(-1);}

    const question2Next = (e) => {
        navigate( `/question3` );
        console.log("go to question3");
        setQuestion2Answer(localStorage.getItem("Question2Score"));
        }

    useEffect(() => {
        console.log("from question1 " + userNameInput );
        let option1;
        let option2;
        let option3;
        let question2Score = 0;
        if (checkedOne && !checkedTwo &&!checkedThree){
            question2Score = 2
        }else if(!checkedOne && checkedTwo &&!checkedThree){
            question2Score = 2
        } else if (!checkedOne && !checkedTwo &&checkedThree) {
            question2Score = 2
        } else if (!checkedOne && checkedTwo &&checkedThree){
            question2Score = 4
        }else if (checkedOne && checkedTwo && !checkedThree){
            question2Score = 4
        }else if(!checkedOne && checkedTwo && checkedThree){
            question2Score = 4
        }else if(checkedOne && !checkedTwo && checkedThree){
            question2Score = 4
        }else if(checkedOne && checkedTwo && checkedThree){
            question2Score = 6
        }
        console.log("Question2Score " + question2Score);
        setQuestion2Score(localStorage.setItem("Question2Score", question2Score))
        }, [checkedOne, checkedTwo, checkedThree, question2Score])

  return (
    <div className='mainContainer'>
    <div className='frame'>
        {userNameInput ? (<h3 className='userName'>SURVEY FOR: {JSON.parse(userNameInput).toUpperCase()}</h3>) : (<h3 className='userName'>SURVEY FOR:</h3>) }
    </div>
    <h3>Question 2</h3>
    <h2>Please select at least one option</h2>
    <div className='surveyQuestions'>
            <label>
            <input
            className='question-2'
            type="checkbox"
            checked={checkedOne}
            onChange={handleChangeOne}
            />
        Option 1
        </label>
        <label>
            <input
            className='question-2'
            type="checkbox"
            checked={checkedTwo}
            onChange={handleChangeTwo}
            />
            Option 2
        </label>
        <label>
            <input
            className='question-2'
            type="checkbox"
            checked={checkedThree}
            onChange={handleChangeThree}
            />
            Option 3
        </label>
    </div>

    <ForwardButton onClick={question2Next} 
          value="NEXT"/>
    <BackButton   
        onClick={goBack} 
        value="BACK"
       />
    <ProgressBar question2/>
    </div>
    
  )
}

export default Question2