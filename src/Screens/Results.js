import { useNavigate } from "react-router-dom";
import ForwardButton from '../components/ForwardButton';

const Results = ({userNameInput, finalScore}) => {
  let navigate = useNavigate();
  let scoreBar = finalScore + "%"; 

//-------Handlers------------------//
    const resultsNext = (e) => {
        navigate( `/` );
        console.log("reset");
        localStorage.clear();
        }
//-------Handlers END------------------//

  return (
    <div className='mainContainer'>
    <h3>RESULT</h3>
    <h2>Your Score</h2>
    <h3>{JSON.parse(userNameInput).toUpperCase()}</h3>
    <br />
    <h2 className='finalPoints'>{finalScore}</h2>
    <h4>Points</h4>
    <div 
        className='resultBarContainer'>
        <div 
        className='resultBar'
        style={{width: scoreBar}}></div>    
        </div>
    <ForwardButton onClick={resultsNext} 
          value="START NEW"
          />
    </div>
  )
}

export default Results