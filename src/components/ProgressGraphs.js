import { useEffect } from "react";
import axios from "../api/axios";
import LineChart from "./LineChart";

const ProgressGraphs = () => {
    var wordArr = ['1', '2', '3','4','5'];
    var wordArr1 = [20, 40, 60, 80, 100];
    
    var stateArr = ['1', '2', '3','4','5'];
    var stateArr1 = [20, 40, 60, 80, 100];

    var countryArr = ['1', '2', '3','4','5'];
    var  countryArr1 = [20, 40, 60, 80, 100];

    var planetArr = ['1', '2', '3','4','5'];
    var planetArr1 = [20, 40, 60, 80, 100];

    var mathArr = ['1', '2', '3','4','5'];
    var mathArr1 = [20, 40, 60, 80, 100];

    var dateArr = [];
    var scoreArr =[];

    useEffect(() => {
      if (sessionStorage.getItem("loggedIn")) { 
        axiosRequest("wordNumber");
        axiosRequest("stateCapital");
        axiosRequest("country");
        axiosRequest("planet");
        axiosRequest("math");
      }     
    }, [])
    
    const axiosRequest = async (testName) => {
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

        console.log(dateArr, scoreArr)

        if (testName === "wordNumber") {
          wordArr = dateArr;
          wordArr1 = scoreArr;
        } 
        else if (testName == "stateCapital") {
          stateArr = dateArr;
          stateArr1 = scoreArr;
        } 
        else if (testName === "country") {
          countryArr = dateArr;
          countryArr1 = scoreArr;
        } 
        else if (testName === "planet") {
          planetArr = dateArr;
          planetArr1 = scoreArr;
        } 
        else {
          mathArr = dateArr;
          mathArr1 = scoreArr;
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