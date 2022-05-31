import axios from "../api/axios";
import { useState, useEffect } from "react";
import LineChart from "./LineChart";

const ProgressGraphs = () => {
    const [wordArr, setWordArr] = useState(['1', '2', '3','4','5']);
    const [wordArr1, setWordArr1] = useState([20, 40, 60, 80, 100]);
    
    const [stateArr, setStateArr] = useState(['1', '2', '3','4','5']);
    const [stateArr1, setStateArr1] = useState([20, 40, 60, 80, 100]);

    const [countryArr, setCountryArr] = useState(['1', '2', '3','4','5']);
    const [countryArr1, setCountryArr1] = useState([20, 40, 60, 80, 100]);

    const [planetArr, setPlanetArr] = useState(['1', '2', '3','4','5']);
    const [planetArr1, setPlanetArr1] = useState([20, 40, 60, 80, 100]);

    const [mathArr, setMathArr] = useState(['1', '2', '3','4','5']);
    const [mathArr1, setMathArr1] = useState([20, 40, 60, 80, 100]);

    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("loggedIn"))

    var dateArr = [];
    var scoreArr =[];

    const  axiosRequest = async (testName) => {
      dateArr = [];
      scoreArr = [];

        try {
          const response = await axios.get(`/api/test/${testName}`, {
            headers: {'Content-Type' : 'application/json', 'Authorization' : `Bearer ${sessionStorage.getItem('accessToken')}`}  
          }
          );
 
        
        for(let i=0; i < response.data.length; i++) {
          dateArr.push(response.data[i].date);
          scoreArr.push(parseInt(response.data[i].score));
        }

        }
        catch (err) {
            console.log(err.data);
        }

        if (testName === "wordNumber") {
          setWordArr(dateArr);
          setWordArr1(scoreArr);
        } 
        else if (testName == "stateCapital") {
          setStateArr(dateArr);
          setStateArr1(scoreArr);
        } 
        else if (testName === "country") {
          setCountryArr(dateArr);
          setCountryArr1(scoreArr);
        } 
        else if (testName === "planet") {
          setPlanetArr(dateArr);
          setPlanetArr1(scoreArr);
        } 
        else {
          setMathArr(dateArr);
          setMathArr1(scoreArr);
        }
      } 

  if (loggedIn) { 
    axiosRequest("wordNumber");
    axiosRequest("stateCapital");
    axiosRequest("country");
    axiosRequest("planet");
    axiosRequest("math");
  }
  
  return (
    <div className="gs">
      <h1 id="graph1">Graphs</h1>
      <p className={loggedIn ? "offcreen" : "show"}>Log in to see your own test data</p>
      
      <div className="graphdiv">
        <label>Words/Numbers </label>
        <LineChart chartLables={wordArr} chartValues={wordArr1}/>
      </div>
      
      <div className="graphdiv">
        <label>State/Capitals </label>
        <LineChart chartLables={stateArr} chartValues={stateArr1}/>
      </div>

    <div className="graphdiv">
      <label>Countries</label>
      <LineChart chartLables={countryArr} chartValues={countryArr1}/>
    </div>

    <div className="graphdiv">
      <label>Planets</label>
      <LineChart chartLables={planetArr} chartValues={planetArr1}/>
    </div>

    <div className="graphdiv">
      <label>Math</label>
      <LineChart chartLables={mathArr} chartValues={mathArr1}/>
    </div>

    </div>
  )
}

export default ProgressGraphs