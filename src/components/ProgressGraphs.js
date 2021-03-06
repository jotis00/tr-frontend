import { useState, useEffect } from "react";
import axios from "../api/axios";
import LineChart from "./LineChart";

const ProgressGraphs = () => {
    const [wordArr, setWordArr] = useState([]);
    const [wordArr1, setWordArr1] = useState([]);

    const [stateArr, setStateArr] = useState(['1', '2', '3','4','5']);
    const [stateArr1, setStateArr1] = useState([20, 40, 60, 80, 100]);

    const [countryArr, setCountryArr] = useState(['1', '2', '3','4','5']);
    const [countryArr1, setCountryArr1] = useState([20, 40, 60, 80, 100]);

    const [planetArr, setPlanetArr] = useState(['1', '2', '3','4','5']);
    const [planetArr1, setPlanetArr1] = useState([20, 40, 60, 80, 100]);

    const [mathArr, setMathArr] = useState(['1', '2', '3','4','5']);
    const [mathArr1, setMathArr1] = useState([20, 40, 60, 80, 100]);

    var dateArr = [];
    var scoreArr =[];

    useEffect(() => {
      console.log("mounted")
      // if (sessionStorage.getItem("loggedIn")) { 
      //   axiosRequest("wordNumber");
      //   axiosRequest("stateCapital");
      //   axiosRequest("country");
      //   axiosRequest("planet");
      //   axiosRequest("math"); 
      // }

      const fetchData = async (testName) => {
        if(sessionStorage.getItem("accessToken")) {
        const response = await axios.get(`/api/test/${testName}`, {
          headers: {'Content-Type' : 'application/json', 'Authorization' : `Bearer ${sessionStorage.getItem('accessToken')}`}  
        }
        );

        dateArr = [];
        scoreArr = [];

        for(let i=0; i < response.data.length; i++) {
          dateArr.push(response.data[i].dateOfTest);
          scoreArr.push(parseInt(response.data[i].score));
          console.log(testName, dateArr, scoreArr)
        }

        if (testName === "wordNumber") {
          setWordArr(dateArr);
          setWordArr1(scoreArr);
        } 
        else if (testName == "stateCapital") {
          setStateArr(dateArr);
          setStateArr1(scoreArr);
          console.log(stateArr, stateArr1)
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
    }
      fetchData("stateCapital");
    }, [])



    const axiosRequest = async (testName) => {
        try {
          const response = await axios.get(`/api/test/${testName}`, {
            headers: {'Content-Type' : 'application/json', 'Authorization' : `Bearer ${sessionStorage.getItem('accessToken')}`}  
          }
          );

        dateArr = [];
        scoreArr = [];

        for(let i=0; i < response.data.length; i++) {
          dateArr.push(response.data[i].dateOfTest);
          scoreArr.push(parseInt(response.data[i].score));
          console.log(testName, dateArr, scoreArr)
        }

        }
        catch (err) {
            console.log(err.data);
        }

        if (testName === "wordNumber") {
          setWordArr(dateArr);
          setWordArr1(scoreArr);
        } 
        else if (testName === "stateCapital") {
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

  return (
    <div className="gs">
      <h1 id="graph1">Graphs</h1>
      <p className={sessionStorage.getItem("loggedIn") ? "offscreen" : "show"}>Log in to see your own test data</p>
      
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