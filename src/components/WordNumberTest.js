import { useRef, useState, useEffect} from "react"

var questionNumber=0;
var generatedArray = [];
var userArray = [];

const WordNumberTest = () => {

    const [prompt, setPrompt] = useState('');
    const [userInput, setUserInput] = useState('');
    

    const random = (length = 8) => {
        // Declare all characters
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
        // Pick characers randomly
        let str = '';
        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
    
        return str;
    
    };



    const displayPrompt = () => {
     
        var numberOfQuestions = 10;
        if (questionNumber <= numberOfQuestions)
        {
            const randomString = random();
            generatedArray.push(randomString);

            //display text through label for 3 seconds
            setPrompt(randomString);

            //timer
            setTimeout(() => {setPrompt('')}, 3000)
            questionNumber += 1;
            console.log(generatedArray + " " + questionNumber);
        }
        else {
            //calculate score

        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        userArray.push(userInput);
        setUserInput('');
        displayPrompt();
    }

    
  return (
    <section>
        <h1>Word/Number Test</h1>
        <button onClick={displayPrompt}>Start</button>
        <form onSubmit={handleSubmit}>
            <label 
                    id="prompt"
                    value={prompt}
                    // onChange = {(e) => setPrompt(e.target.value)}
                    /> 
            <input
                    id="userInput"
                    autoComplete="off"
                    onChange={(e) => setUserInput(e.target.value)}
                    value={userInput}
            />
            <button>Submit</button>
        </form>
    </section>
  )
}

export default WordNumberTest