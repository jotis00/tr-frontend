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

  const wordNumberTest = () => {
    navigate("/wordnumbertest");
  }
  const stateCapitalTest = () => {}
  const countriesTest = () => {}
  const planetTest = () => {}
  const mathTest = () => {}

  return (
    <section>
      <h1>Select Test</h1>
      <button onClick={wordNumberTest}>Words/Numbers</button>
      <button disabled={true} onClick={stateCapitalTest}>State/Capitals</button>
      <button disabled={true} onClick={countriesTest}>Countries</button>
      <button disabled={true} onClick={planetTest}>Planets</button>
      <button disabled={true} onClick={mathTest}>Math</button>
      </section>
  )
}

export default TestSelection