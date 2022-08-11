import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import ForwardButton from '../components/ForwardButton';
import BackButton from '../components/BackButton';

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
        navigate( `/question2` );
        console.log("go to question2");
        setQuestion1Answer(localStorage.getItem("Question1Score"));
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
    <>
         <h3>Question1</h3>
         <h2>How often do you visit this website</h2>
         <div className='surveyQuestions'>
         <label>
        <input
          type="checkbox"
          checked={checkedOne}
          onChange={handleChangeOne}
        />
       Often
      </label>
      <label>
        <input
          type="checkbox"
          checked={checkedTwo}
          onChange={handleChangeTwo}
        />
        Rarely
      </label>
      <label>
        <input
          type="checkbox"
          checked={checkedThree}
          onChange={handleChangeThree}
        />
        Never
      </label>
         </div>

        <ForwardButton onClick={question1Next} 
          value="NEXT"/>
        <BackButton   onClick={goBack} 
          value="BACK"/>
    </>
  )
}

export default Question1