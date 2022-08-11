import './App.css';
import {useState} from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import ForwardButton from './components/ForwardButton';
import MainScreen from './Screens/MainScreen';
import EnterName from './Screens/EnterName';
import Question1 from './Screens/Question1'
import Question2 from './Screens/Question2'

function App() {

  const  [userNameInput, setUserName] = useState('');
  const  [question1Answer, setQuestion1Answer] = useState('');

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
              userNameInput={userNameInput} />} />
          <Route path="question2" element={
            <Question2 
              userNameInput={userNameInput} />} />     
      </Routes>
     
    </div>
  );
}

export default App;
