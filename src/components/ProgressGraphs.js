import axios from "../api/axios";


const ProgressGraphs = () => {

    const wordNumberGraph = () => {
      var testName = "wordNumber";
      try {
          const response = axios.post(`/api/test/${testName}`, {
            headers: {'Content-Type' : 'application/json', 'Authorization' : `Bearer ${sessionStorage.getItem('accessToken')}`}  
          }
          );

          console.log(response.data);
      } 
      catch (err) {

      }

    }
    const stateCapitalGraph = () => {

    }
    const countriesGraph = () => {

    }
    const planetGraph = () => {

    }
    const mathGraph = () => {

    }

  return (
    <div className="gs">
      <button className="gb" onClick={wordNumberGraph}>Words/Numbers</button>
      <button className="gb" disabled={true} onClick={stateCapitalGraph}>State/Capitals</button>
      <button className="gb" disabled={true} onClick={countriesGraph}>Countries</button>
      <button className="gb" disabled={true} onClick={planetGraph}>Planets</button>
      <button className="gb" disabled={true} onClick={mathGraph}>Math</button>
      <h3 id="testNameLabel">SELECT TEST TO SHOW GRAPH</h3>
      <div className="graphView">
    
      </div>
    </div>
  )
}

export default ProgressGraphs