
const ProgressGraphs = () => {

    const wordNumberGraph = () => {
    
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