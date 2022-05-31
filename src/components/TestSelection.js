import { useRef} from "react"
import {useNavigate, useLocation } from 'react-router-dom';


const TestSelection = () => {
  const navigate = useNavigate();
  
  const wordNumberTest = () => { navigate("/wordnumbertest") }
  const stateCapitalTest = () => {  navigate("/statescapitalstest") }
  const countriesTest = () => { navigate("/countriestest") }
  const planetTest = () => { navigate("/planettest") }
  const mathTest = () => { navigate("/mathtest") }

  return (
    <section>
      <h1>Select Test</h1>
      <h4 className="secondary">Other Tests Coming Soon</h4>
      <button className="tsb" onClick={wordNumberTest}>Words/Numbers</button>
      <button className="tsb" onClick={stateCapitalTest}>State/Capitals</button>
      <button className="tsb" onClick={countriesTest}>Countries</button>
      <button className="tsb" onClick={planetTest}>Planets</button>
      <button className="tsb" onClick={mathTest}>Math</button>
      </section>
  )
}

export default TestSelection