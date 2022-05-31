
import { useRef, useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const Account = () => {
    const navigate = useNavigate();
    const [logStatus, setLogStatus] = useState(false);
  
   
    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/login');
    }

    const handleDelete = async () => {
      if (!sessionStorage.getItem("accessToken")) { 
      sessionStorage.clear();
      navigate('/login');
      };

      const response = await axios.delete("/api/auth/delete", {
        headers: {'Content-Type' : 'application/json', 'Authorization' : `Bearer ${sessionStorage.getItem('accessToken')}`}
      });

      sessionStorage.clear();
      navigate('/login');
    }

  return (
    <section id="accounts">
        <h1 id="accountH1">Account</h1>
        <p id="err" className={sessionStorage.getItem("loggedIn") ? "offscreen" : "show"}>Not Logged In</p>
        <label id="message" className={!sessionStorage.getItem("loggedIn") ? "offscreen" : "show"}>Pressing the delete button will permantly delete account!</label>

        
        <button className={!sessionStorage.getItem("loggedIn") ? "offscreen" : "shadow1"} id="logoutB" onClick={handleLogout}>Logout</button>
        <button className={!sessionStorage.getItem("loggedIn") ? "offscreen" : "shadow1"} id="deleteAccount" onClick={handleDelete}>Delete Account</button>
        <button className={sessionStorage.getItem("loggedIn") ? "offscreen" : "shadow"} id="adf" onClick={handleLogout}>Sign In</button>
    </section>
  )
}

export default Account