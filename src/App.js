import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth'
import Layout from './components/Layout';
import TestSelection from './components/TestSelection';
import WordNumberTest from './components/WordNumberTest';
import Missing from './components/Missing';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element = {<Layout />}>
      <Route path="register" element = { <Register/>}/>
      <Route path="login" element = { <Login/>}/>
      <Route path="testselection" element = { <TestSelection/>}/>
      <Route path="wordnumbertest" element = { <WordNumberTest/>}/>
      <Route path="*" element = { <Missing/>}/>
      </Route>
    </Routes>
  );
}

export default App;
