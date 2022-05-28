import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth'
import Layout from './components/Layout';
import TestSelection from './components/TestSelection';
import WordNumberTest from './components/WordNumberTest';
import Missing from './components/Missing';
import {Routes, Route} from 'react-router-dom';
import ProgressGraphs from './components/ProgressGraphs';
import Account from './components/Account';
import StateCapitalTest from './components/StateCapitalTest';
import CountriesTest from './components/CountriesTest';
import PlanetTest from './components/PlanetTest';
import MathTest from './components/MathTest'


function App() {
  return (
    <Routes>
      <Route path="/" element = {<Layout />}>
      <Route path="register" element = { <Register/>}/>
      <Route path="login" element = { <Login/>}/>
      <Route path="testselection" element = { <TestSelection/>}/>
      <Route path="wordnumbertest" element = { <WordNumberTest/>}/>
      <Route path="statescapitalstest" element = { <StateCapitalTest/>}/>
      <Route path="countriestest" element = { <CountriesTest/>}/>
      <Route path="planettest" element = { <PlanetTest/>}/>
      <Route path="mathtest" element = { <MathTest/>}/>
      <Route path='progressgraphs' element = {<ProgressGraphs/>}/>
      <Route path='account' element = {<Account/>}/>
      <Route path="*" element = { <Missing/>}/>
      </Route>
    </Routes>
  );
}

export default App;
