import { useNavigate } from "react-router-dom";
import ForwardButton from '../components/ForwardButton';
import BackButton from '../components/BackButton';

const EnterName = ({userNameInput, setUserName}) => {

    let navigate = useNavigate();

//---------Handlers----------------------//
    const goBack = (e) => {
        console.log('go back')
        navigate(-1);
    }

    const enterNameNext = (e) => {
        console.log("go to question1");
        setUserName(localStorage.getItem('userName'));
        localStorage.getItem("userName") ? navigate( `/question1` ) : alert('Please enter your name')
      }

    const inputTextHandler = (e) => {
        setUserName(localStorage.setItem("userName", JSON.stringify(e.target.value)));
        console.log("handle input field" + userNameInput);
    };

    const pressEnter = (e) => {
      if(e.key === "Enter") {
        localStorage.getItem("userName") ? navigate( `/question1` ) : alert('Please enter your name')
      }
    }
 
  return (
    <div className='mainContainer'> 
        <h3>who are you ?</h3>
        <h2>Please enter your name.</h2>
        <div className='surveyQuestions'>
        <input 
        className='enterName' 
        type="text" 
        placeholder='John Doe'
        onChange={inputTextHandler}
        onKeyUp={pressEnter}
        />
        </div>
        <ForwardButton onClick={enterNameNext} 
        value="NEXT"/>
        <BackButton   onClick={goBack} 
        value="BACK"/>
      
    </div>
  )
}

export default EnterName