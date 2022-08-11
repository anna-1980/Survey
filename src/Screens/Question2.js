import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import ForwardButton from '../components/ForwardButton';
import BackButton from '../components/BackButton';

const Question2 = ({userNameInput}) => {
    let navigate = useNavigate();

//-----Component State-------------//  
const [checkedOne, setCheckedOne] = useState(false);
const [checkedTwo, setCheckedTwo] = useState(false);
const [checkedThree, setCheckedThree] = useState(false);

const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
    setCheckedTwo(false);
    setCheckedThree(false);
  };

const handleChangeTwo = () => {
    setCheckedOne(false);
    setCheckedTwo(!checkedTwo);
    setCheckedThree(false);
  };

const handleChangeThree = () => {
    setCheckedOne(false);
    setCheckedTwo(false);
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
        }

  return (
    <>
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
    </>
    
  )
}

export default Question2