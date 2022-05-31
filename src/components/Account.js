
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

        <button id="logoutB" onClick={handleLogout}>Logout</button>
        <button id="deleteAccount" onClick={handleDelete}>Delete Account</button>
    </section>
  )
}

export default Account