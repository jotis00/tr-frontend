import axios from "../api/axios";


const ProgressGraphs = () => {
    var testName = '';

    const wordNumberGraph = () => {
      testName = "wordNumber"
      axiosRequest();
    }
    const stateCapitalGraph = () => {
      testName = "wordNumber"
      axiosRequest();
    }
    const countriesGraph = () => {
      testName = "wordNumber"
      axiosRequest();
    }
    const planetGraph = () => {
      testName = "wordNumber"
      axiosRequest();
    }
    const mathGraph = () => {
      testName = "wordNumber"
      axiosRequest();
    }

    const axiosRequest = () => {
      try {
        const response = axios.get(`/api/test/${testName}`, {
          headers: {'Content-Type' : 'application/json', 'Authorization' : `Bearer ${sessionStorage.getItem('accessToken')}`}  
        }
        );

        console.log(response);
    } 
    catch (err) {
        console.log(err.data);
    }

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