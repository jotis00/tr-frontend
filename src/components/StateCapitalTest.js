import { useState } from "react"
import axios from "../api/axios";
import ScList from "..//assets/state and capital list.gif";
const TEST_URL = "/api/test";
const nameOfTest = "stateCapital";

const stateArr = ["montgomery", "juneau", "phoenix","little rock", "sacremento", "denver", "hartford", "tallahassee", "altanta", "honolulu"];
const capitalArr = ["alabama", "alaska",  "arizona", "arkansa", "california", "colorado", "conneticut", "florida", "georgia", "hawaii"];
const userArray = [];
var counter = 0;

const StateCapitalTest = () => {
  const [gameStart, setGameStart] = useState(false);
  const [userInput, setUserInput] = useState('');

  var setting = 'default'
  var outputLabel = document.getElementById("score");

  const displayPrompt = () => {
    if (counter <= 9) {
      var promptLabel = document.getElementById("prompt1");
      promptLabel.textContent = stateArr[counter];

      counter += 1;
      if (counter === 9) { displayPrompt() };
    }
    else {
      setGameStart(false);

      var score = 0;

      for (var i=0; i < capitalArr.length; i++) {
          if (capitalArr[i] === userArray[i])
          {
              score += 2;
          }
      }

      var outputScore = score + '%';
      outputLabel.textContent = outputScore;

      var dateOfTest = new Date();
      
      if (sessionStorage.getItem("accessToken"))
      {
      try {
          const response = axios.post(TEST_URL, 
              JSON.stringify({nameOfTest, setting, score, dateOfTest}),
              {
                  headers: {'Content-Type' : 'application/json', 'Authorization' : `Bearer ${sessionStorage.getItem('accessToken')}`}  
              }
          );

          console.log(response.data);
      } 
      catch (err) {
          console.log(err.data);
      }
      }
    }
  }
  

  
  const start = () => {
    setGameStart(true);
    displayPrompt();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    userArray.push(userInput);
    console.log(userArray)
    setUserInput('');
    displayPrompt();
  }

  return (
    <div className="sct">
      <h1>State Capital Test</h1>
      <img id="sctm" src={ScList} alt="State Capital Map" className={ gameStart ? "offscreen": "notHidden"}></img>
      <button id="startButtonSC" className={gameStart ? "offscreen": "nothidden"} onClick={start}>START</button>
      <form onSubmit={handleSubmit}>
            <label 
                    className={!gameStart ? "offscreen": "scores"}
                    id="prompt1"
                    value={prompt}
                    >Prompt
            </label> 
            <input
                    className={!gameStart ? "offscreen": "scores"}
                    id="userInput"
                    autoComplete="off"
                    onChange={(e) => setUserInput(e.target.value)}
                    disabled={!gameStart ? true: false}
                    value={userInput}
            />
            <button className={!gameStart ? "offscreen": "scores"} disabled={!gameStart ? true: false}>Submit</button>
            <label className={gameStart ? "offscreen": "scores"} id="scoreLabel">Score: </label> 
            <label className={gameStart ? "offscreen": "scores"} id="score">Click Start</label>
      </form>
      </div>
  )
}

export default StateCapitalTest