
import {useNavigate } from 'react-router-dom';
import wordNumberImg from '../assets/word-number-test.png'
import usaMap from '../assets/map-test-img.jpg'
import planetImg from '../assets/planet-img.jpg'
import mathImg from '../assets/math-test-img.jpg'

const TestSelection = () => {
  const navigate = useNavigate();

  const wordNumberTest = () => { navigate("/wordnumbertest") }
  const stateCapitalTest = () => {  navigate("/statescapitalstest") }
  const countriesTest = () => { navigate("/countriestest") }
  const planetTest = () => { navigate("/testselection") }
  const mathTest = () => { navigate("/testselection") }

  return (
    <section className="projects">
    <div className="projectContainer">
        <div onClick={wordNumberTest} className="card" id="wordTest">
            <img className="imgC"  src={wordNumberImg} alt="Goal Tracker Project"/>
            <div className="projectInfoContainer">
              <h4><b>Word & Number Test</b></h4>
            </div>
          </div> 

          <div onClick={stateCapitalTest}className="card" id="stateTest">
            <img className="imgC" src={usaMap} alt="project2" />
            <div className="projectInfoContainer">
              <h4><b>State Capitals Test</b></h4>
            </div>
          </div> 

          <div onClick={planetTest} className="card" id="planetTest">
            <img className="imgC" src={planetImg} alt="project3"/>
            <div className="projectInfoContainer">
              <h4><b>Planet Test</b></h4>
              <p className='p'>Development</p>
            </div>
          </div> 

          <div onClick={mathTest}className="card" id="mathTest">
            <img className="imgC"  src={mathImg} alt="project4" />
            <div className="projectInfoContainer">
              <h4><b>Math Test</b></h4>
              <p className='p'>Development</p>
            </div>
          </div> 


    </div>

</section>
  )
}

export default TestSelection