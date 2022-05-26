import { faSpaghettiMonsterFlying } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect} from "react"


var generatedArray = [];
var userArray = [];
var questionNumber =0;
const WordNumberTest = () => {

    const [prompt, setPrompt] = useState('');
    const [userInput, setUserInput] = useState('');
    const [gameStart, setGameStart] = useState(false);
    const [gameEnd, setGameEnd] = useState(false);
    const [timer, setTimer] = useState(true);
    

    const random = (length = 8) => {
        // Declare all characters
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
        // Pick characers randomly
        let str = '';
        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
    
        return str;
    
    };


    var outputLabel = document.getElementById("score");
    var scoreLabel = document.getElementById("scoreLabel");

    const displayPrompt = () => {
        var numberOfQuestions = 10;
        if (questionNumber < numberOfQuestions)
        {
            const randomString = random();
            generatedArray.push(randomString);

            //display text through label for 3 seconds
            var promptLabel = document.getElementById("prompt");
            
            promptLabel.textContent = randomString;
            setTimer(true);
            //timer
            setTimeout(() => {promptLabel.textContent = " "; setTimer(false);}, 3000)
            questionNumber += 1;
            console.log(generatedArray + " " + questionNumber);

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
            //axios post to backend

            var outputScore = score + '%';
           
            outputLabel.textContent = outputScore;
            // scoreLabel.classList.remove("offscreen");
            // outputLabel.classList.remove("offscreen");

            console.log(score);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        userArray.push(userInput);
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
        <h1>Word/Number Test</h1>
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
            <label className={gameStart ? "offscreen": "scores"} id="scoreLabel">Score: </label> 
            <label className={gameStart ? "offscreen": "scores"} id="score">Click Start</label>
        </form>
    </section>
  )
}

export default WordNumberTest