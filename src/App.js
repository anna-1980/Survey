import './App.css';
import {useState , useEffect} from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import ForwardButton from './components/ForwardButton';
import MainScreen from './Screens/MainScreen';
import EnterName from './Screens/EnterName';
import Question1 from './Screens/Question1';
import Question2 from './Screens/Question2';
import Question3 from './Screens/Question3';
import Results from './Screens/Results';

function App() {

  const  [userNameInput, setUserName] = useState( () => {
    const newUser = localStorage.getItem('userName');
    return newUser || "";
  });
  const  [question1Answer, setQuestion1Answer] = useState(localStorage.getItem('Question1Score'));
  const  [question2Answer, setQuestion2Answer] = useState(localStorage.getItem('Question2Score'));
  const  [question3Answer, setQuestion3Answer] = useState(localStorage.getItem('Question3Score'));
  const  [question3Score, setQuestion3Score] = useState();
  const  [finalScore, setFinalScore] = useState();
 

    useEffect(() => {
        if(question3Answer === "Germany"){
          setQuestion3Score(3)
        } else if(question3Answer === "Spain"){
          setQuestion3Score(3)
        }else{
          setQuestion3Score(5)
        }
        setFinalScore(
          (Number(question1Answer) + Number(question2Answer) + question3Score) / 0.16
        )
        // setUserName(localStorage.getItem('userName'));
        console.log("Name from App.js" + userNameInput)
        console.log("Answer1 App.js value = " + question1Answer)
        console.log("Answer2 App.js value = " + question2Answer)
        console.log("Answer3 App.js value = " + question3Answer)
        console.log("countryScore value = " + question3Score)
        console.log("FinalScore value = " + finalScore)
      }, [userNameInput, question1Answer, question2Answer, question3Score, finalScore]);

  return (
     <div className='mainContainer'>
         <div className='frame'>
        {userNameInput ? (<h3 className='userName'>SURVEY FOR: {JSON.parse(userNameInput).toUpperCase()}</h3>) : (<h3 className='userName'>SURVEY FOR:</h3>) }
     </div>
        <Routes>
          <Route path="/" element={
            <MainScreen
             userNameInput={userNameInput}/>} />
          <Route path="enterName" element={
            <EnterName 
             userNameInput={userNameInput} 
             setUserName={setUserName}/>} />
          <Route path="question1" element={
            <Question1 
              userNameInput={userNameInput} 
              setUserName={setUserName}
              question1Answer={question1Answer}
              setQuestion1Answer={setQuestion1Answer}
              />} />
          <Route path="question2" element={
            <Question2 
              userNameInput={userNameInput} 
              setUserName={setUserName}
              setQuestion2Answer={setQuestion2Answer}
              />} />     
          <Route path="question3" element={
            <Question3 
             userNameInput={userNameInput} 
             setUserName={setUserName}
             setQuestion2Answer={setQuestion3Answer}
          />} />  
         <Route path="results" element={
            <Results 
             userNameInput={userNameInput} 
             setUserName={setUserName}
             finalScore={finalScore}
          />} /> 
      </Routes>
     
    </div>
  );
}

export default App;
