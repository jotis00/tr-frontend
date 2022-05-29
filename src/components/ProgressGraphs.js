import axios from "../api/axios";
import * as JSC from "jscharting";


const ProgressGraphs = () => {
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

    const  axiosRequest = async () => {
      if (sessionStorage.getItem("loggedIn")) {  
      try {
        const response = await axios.get(`/api/test/${testName}`, {
          headers: {'Content-Type' : 'application/json', 'Authorization' : `Bearer ${sessionStorage.getItem('accessToken')}`}  
        }
        );

        console.log(response.data);
        let testDataArr = [];
        let stagingArr = [];

        for(let i=0; i < response.data.length; i++) {
          stagingArr.push(response.data[i].date);
          stagingArr.push(parseInt(response.data[i].score));
          testDataArr.push(stagingArr);

          stagingArr = [];
        }

        var chart = JSC.chart('chartDiv', {
          debug: true,
          type: 'line',
          title_label_text: 'Line Series Types',
          legend_position: 'inside bottom right',
          toolbar_items: {
            'Line Type': {
              type: 'select',
              label_style_fontSize: 13,
              margin: 5,
              items: 'Line,Step,Spline',
              events_change: function(val) {
                chart.series().options({ type: val });
              }
            }
          },
          xAxis: { scale_type: 'time' },
          series: [
            {
              name: 'Score',
              points: testDataArr
            }
          ]
        });
        
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
      <lable id="testNameLabel">SELECT TEST TO SHOW GRAPH</lable>
      <div id="chartDiv"></div>
      </div>
  )
}

export default ProgressGraphs