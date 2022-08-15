import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import ForwardButton from '../components/ForwardButton';
import BackButton from '../components/BackButton';
import ProgressBar from '../components/ProgressBar';
import { ArrowCircleRight } from "phosphor-react";

const Question1 = ({userNameInput, setUserName, question1Answer, setQuestion1Answer}) => {
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

//-------handlers------------------//
    const goBack = (e) => {
        console.log('go back')
        navigate(-1);
    }

    const question1Next = (e) => {
        console.log("go to question2");
        setQuestion1Answer(localStorage.getItem("Question1Score"));
        localStorage.getItem("Question1Score") ? navigate( `/question2` ) : alert('please choose one')
      }
//-------handlers------------------//

    useEffect(() => {
       console.log("from question1 " + userNameInput );
       if (checkedOne){
        localStorage.setItem("Question1Score", "5")
       }else if(checkedTwo){
        console.log('two');
        localStorage.setItem("Question1Score", "3")
       } else if (checkedThree) {
        localStorage.setItem("Question1Score", "0")
        console.log('three')
       }
    }, [checkedOne, checkedTwo, checkedThree])

  return (
    <div className='mainContainer'>   
        <div className='frame'>
        {userNameInput ? (<h3 className='userName'>SURVEY FOR: {JSON.parse(userNameInput).toUpperCase()}</h3>) : (<h3 className='userName'>SURVEY FOR:</h3>) }
         </div>
         <h3>Question 1</h3>
         <h2>How often do you visit this website</h2>
    <div className='surveyQuestions'>
            <label>
            <input
            className='question-1'
            type="checkbox"
            checked={checkedOne}
            onChange={handleChangeOne}
            />
        Often
        </label>
        <label>
            <input
            className='question-1'
            type="checkbox"
            checked={checkedTwo}
            onChange={handleChangeTwo}
            />
            Rarely
        </label>
        <label>
            <input
            className='question-1'
            type="checkbox"
            checked={checkedThree}
            onChange={handleChangeThree}
            />
            Never
        </label>
    </div>

        <ForwardButton onClick={question1Next} 
          value="NEXT"
          iconValue={<ArrowCircleRight size={32} />}
          />
        <BackButton   onClick={goBack} 
          value="BACK"
          />
      
      <ProgressBar question1/>
    </div>
  )
}

export default Question1