import { useRef, useState, useEffect} from "react"
import { Link, useNavigate, useLocation } from 'react-router-dom';


const TestSelection = () => {
  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();

//   useEffect(() => {
//     userRef.current.focus();
// }, [])

  const wordNumberTest = () => {}
  const stateCapitalTest = () => {}
  const countriesTest = () => {}
  const planetTest = () => {}
  const mathTest = () => {}

  return (
    <section>
      <h1>Select Test</h1>
      <button onClick={wordNumberTest}>Words/Numbers</button>
      <button onClick={stateCapitalTest}>State/Capitals</button>
      <button onClick={countriesTest}>Countries</button>
      <button onClick={planetTest}>Planets</button>
      <button onClick={mathTest}>Math</button>
      
      </section>
  )
}

export default TestSelection