import axios from "../api/axios";
import { JSCharting } from 'jscharting-react';
import {useState, useEffect } from "react"
import { faArrowDownUpAcrossLine } from "@fortawesome/free-solid-svg-icons";

var config;
var counter = 0;

function useForceUpdate() {
  let [value, setState] = useState(true);
  return () => setState(!value);
}


const ProgressGraphs = () => {
    const [rerender, setRerender] = useState(false);
    var testName = '';
    let forceUpdate = useForceUpdate();
    
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
      if (sessionStorage.getItem("loggedIn")) {  
        try {
          const response = await axios.get(`/api/test/${testName}`, {
            headers: {'Content-Type' : 'application/json', 'Authorization' : `Bearer ${sessionStorage.getItem('accessToken')}`}  
          }
          );

          console.log(response.data);
         
          let stagingArr = [];

          for(let i=0; i < response.data.length; i++) {
            stagingArr.push(response.data[i].date);
            stagingArr.push(parseInt(response.data[i].score));
            testDataArr.push(stagingArr);

            stagingArr = [];
          }
    
        config = {
          debug: true,
          type: 'line',
          xAxis: {scale_type: 'time'},
          series: [
              {
                  name: 'Score',
                  points: testDataArr
              }
            ]
        }
        setRerender(!rerender); 
     
  
       

     
    //     var chart = JSC.chart('chartDiv', {
    //       debug: true,
    //       type: 'line',
    //       title_label_text: 'Line Series Types',
    //       legend_position: 'inside bottom right',
    //       toolbar_items: {
    //         'Line Type': {
    //           type: 'select',
    //           label_style_fontSize: 13,
    //           margin: 5,
    //           items: 'Line,Step,Spline',
    //           events_change: function(val) {
    //             chart.series().options({ type: val });
    //           }
    //         }
    //       },
    //       xAxis: { scale_type: 'time' },
    //       series: [
    //         {
    //           name: 'Score',
    //           points: testDataArr
    //         }
    //       ]
    //     });
        
    } 
    catch (err) {
        console.log(err.data);
    }

  }
  }
  return (
    <div className="gs">
      <button className="gb" onClick={wordNumberGraph}>Words/Numbers</button>
      <button className="gb" disabled={true} onClick={stateCapitalGraph}>State/Capitals</button>
      <button className="gb" disabled={true} onClick={countriesGraph}>Countries</button>
      <button className="gb" disabled={true} onClick={planetGraph}>Planets</button>
      <button className="gb" disabled={true} onClick={mathGraph}>Math</button>
      <label id="testNameLabel">SELECT TEST TO SHOW GRAPH</label>
      <div id="chartDiv"><JSCharting options={config} /></div>
      </div>
  )
}

export default ProgressGraphs