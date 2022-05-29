import { useState } from "react"
import axios from "../api/axios";
import ScMap from "../assets/capitals.webp";
import ScList from "..//assets/state and capital list.gif";
const TEST_URL = "/api/test";
const nameOfTest = "stateCapital";


const StateCapitalTest = () => {
  const [gameStart, setGameStart] = useState(false);

  const start = () => {

  }

  return (
    <div className={gameStart ? "sct": "sctM"}>
      <h1>State Capital Test</h1>
      <button style={{display: 'flex', alignItems: "center"}}disabled={gameStart ? true: false} onClick={start}>Start</button>
      <img id="sctm" src={ScMap} alt="State Capital Map" className={ gameStart ? "offscreen": "notHidden"}></img>
      
      </div>
  )
}

export default StateCapitalTest