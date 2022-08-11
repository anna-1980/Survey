import './App.css';
import {useState , useEffect} from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import ForwardButton from './components/ForwardButton';
import MainScreen from './Screens/MainScreen';
import EnterName from './Screens/EnterName';
import Question1 from './Screens/Question1'
import Question2 from './Screens/Question2'

function App() {

  const  [userNameInput, setUserName] = useState( () => {
    const newUser = localStorage.getItem('userName');
    return newUser || "";
  });
  const  [question1Answer, setQuestion1Answer] = useState(localStorage.getItem('Question1Score'));

    useEffect(() => {
 
        // setUserName(localStorage.getItem('userName'));
        console.log("from App.js" + userNameInput)
        console.log("Answer1 App.js value = " + question1Answer)
      }, [userNameInput, question1Answer]);

  return (
     <div className='mainContainer'>
        <Routes>
          <Route path="/" element={<MainScreen/>} />
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
              setUserName={setUserName}/>} />     
      </Routes>
     
    </div>
  );
}

export default App;
