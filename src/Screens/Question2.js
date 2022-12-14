import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import ForwardButton from '../components/ForwardButton';
import BackButton from '../components/BackButton';
import ProgressBar from '../components/ProgressBar';
import { ArrowCircleRight } from "phosphor-react";

const Question2 = ({userNameInput, setQuestion2Answer}) => {
    let navigate = useNavigate();

//-----Component State START-------------//  
const [checkedOne, setCheckedOne] = useState(false);
const [checkedTwo, setCheckedTwo] = useState(false);
const [checkedThree, setCheckedThree] = useState(false);
const [question2Score, setQuestion2Score] = useState();
//-----Component State END-------------//  

//-------Handlers------------------//
const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };

const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

const handleChangeThree = () => {
    setCheckedThree(!checkedThree);
  };

const goBack = (e) => {
    navigate(-1);}

const question2Next = (e) => {
    setQuestion2Answer(localStorage.getItem("Question2Score"));
    localStorage.getItem("Question2Score") > 0 ? navigate( `/question3` ) : alert('please choose one')
    }
//-------Handlers END------------------//

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
        }, [checkedOne, checkedTwo, checkedThree])

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
          value="NEXT"
          iconValue={<ArrowCircleRight size={32} />}
          />
    <BackButton   
        onClick={goBack} 
        value="BACK"
       />
    <ProgressBar question2/>
    </div>
    
  )
}

export default Question2