import axios from "../api/axios";
import { useState, useEffect } from "react";
import LineChart from "./LineChart";
import Chart from 'chart.js/auto';



const ProgressGraphs = () => {
    const [rerender, setRerender] = useState(false);
    var testName = '';

      const wordNumberGraph = () => {
      testName = "wordNumber"
      var testNameLabel = document.getElementById("testNameLabel");
      testNameLabel.textContent = "Words/Numbers";
      axiosRequest();
    }
                      
    const stateCapitalGraph = () => {
      testName = "stateCapital"
      var testNameLabel = document.getElementById("testNameLabel");
      testNameLabel.textContent = "State/Capitals";
      axiosRequest();
    }
    const countriesGraph = () => {
      testName = "country"
      var testNameLabel = document.getElementById("testNameLabel");
      testNameLabel.textContent = "Country";
      axiosRequest();
    }
    const planetGraph = () => {
      testName = "planet"
      var testNameLabel = document.getElementById("testNameLabel");
      testNameLabel.textContent = "Planet";
      axiosRequest();
    }
    const mathGraph = () => {
      testName = "math"
      var testNameLabel = document.getElementById("testNameLabel");
      testNameLabel.textContent = "Math";
      axiosRequest();
    }

    var testDataArr = [];

    const  axiosRequest = async () => {
      testDataArr = [];
      let stagingArr = [];

      if (sessionStorage.getItem("loggedIn")) {  
        try {
          const response = await axios.get(`/api/test/${testName}`, {
            headers: {'Content-Type' : 'application/json', 'Authorization' : `Bearer ${sessionStorage.getItem('accessToken')}`}  
          }
          );
 
        for(let i=0; i < response.data.length; i++) {
          stagingArr.push(response.data[i].date);
          stagingArr.push(parseInt(response.data[i].score));
          testDataArr.push(stagingArr);

          stagingArr = [];
        }

        }
        catch (err) {
            console.log(err.data);
        }
      } else {
        testDataArr.push(['1/2/2022', 50], ['1/3/2022', 60], ['1/4/2022', 70], ['1/5/2022', 80])
      }
    
        //create plot
        const ctx = document.getElementById('myChart');
        const myChart = new Chart(ctx, {
          type: 'line',
          data: {
              datasets: [{
                  label: 'Score',
                  data: testDataArr,
                  backgroundColor: [
                      // 'rgba(255, 99, 132, 0.2)',
                  ],
                  borderColor: 'rgb(75, 192, 192)',
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      });

      setRerender(!rerender); 
  }


  return (
    <div className="gs">
      <button className="gb" onClick={wordNumberGraph}>Words/Numbers</button>
      <button className="gb" onClick={stateCapitalGraph}>State/Capitals</button>
      <button className="gb" disabled={true} onClick={countriesGraph}>Countries</button>
      <button className="gb" disabled={true} onClick={planetGraph}>Planets</button>
      <button className="gb" disabled={true} onClick={mathGraph}>Math</button>
      <label id="testNameLabel">SELECT TEST TO SHOW GRAPH</label>
      <canvas id="myChart" width="400" height="400"></canvas>
      </div>
  )
}

export default ProgressGraphs