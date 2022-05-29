import { useState } from "react"
import axios from "../api/axios";

const TEST_URL = "/api/test";
const nameOfTest = "wordNumber";

var generatedArray = [];
var userArray = [];
var questionNumber = 0;

const WordNumberTest = () => {
    const [prompt] = useState('');
    const [userInput, setUserInput] = useState('');
    const [gameStart, setGameStart] = useState(false);
    const [timer, setTimer] = useState(true);
    

    const random = (length = 8) => {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let str = '';

        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str;
    };

    var outputLabel = document.getElementById("score");
    var setting = "defalut";

    const displayPrompt = () => {
       
        var numberOfQuestions = 10;
        if (questionNumber < numberOfQuestions)
        {
            const randomString = random();
            generatedArray.push(randomString);

            var promptLabel = document.getElementById("prompt");
            promptLabel.textContent = randomString;

            setTimer(true);
            setTimeout(() => {promptLabel.textContent = " "; setTimer(false);}, 3000)
            questionNumber += 1;

            if (questionNumber === 10) { displayPrompt() };
        }
        else {
            setGameStart(false);
            var score = 0;

            for (var i=0; i < generatedArray.length; i++) {
                if (generatedArray[i] === userArray[i])
                {
                    score += 10;
                }
            }
            
            var outputScore = score + '%';
            outputLabel.textContent = outputScore;
            
            
            let date = new Date();
            let dateOfTest = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
  

            if (sessionStorage.getItem("accessToken"))
            {
            try {
                const response = axios.post(TEST_URL, 
                    JSON.stringify({nameOfTest, setting, score, dateOfTest}),
                    {
                        headers: {'Content-Type' : 'application/json', 'Authorization' : `Bearer ${sessionStorage.getItem('accessToken')}`}  
                    }
                );

                //set response to label
            } 
            catch (err) {
            }
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        //to uppercase

        userArray.push(userInput.toLocaleUpperCase);
        setUserInput('');
        displayPrompt();
    }

    const start = () => {
        setGameStart(true);
        generatedArray = [];
        userArray = [];
        questionNumber = 0;
        displayPrompt();
    }
    
  return (
    <section>
        <h1>Word Number Test</h1>
        <button disabled={gameStart ? true: false} onClick={start}>Start</button>
        <form onSubmit={handleSubmit}>
            <label 
                    id="prompt"
                    value={prompt}
                    >Prompt
            </label> 
            <input
                    id="userInput"
                    autoComplete="off"
                    onChange={(e) => setUserInput(e.target.value)}
                    disabled={!gameStart ? true: false || timer ? true: false}
                    value={userInput}
            />
            <button disabled={!gameStart ? true: false || timer ? true: false}>Submit</button>
            <label className={gameStart ? "offscreen": "adf"} id="scoreLabel">Score: </label> 
            <label className={gameStart ? "offscreen": "sadf"} id="score">Click Start</label>
        </form>
    </section>
  )
}

export default WordNumberTest