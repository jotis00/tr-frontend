
import { useRef, useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const Account = () => {
    const navigate = useNavigate();
    const [logStatus, setLogStatus] = useState(false);
    var messageOuput = document.getElementById("message");
    
    if(sessionStorage.getItem("accessToken")) {
      setLogStatus(true);
      
      messageOuput.textContent = "Pressing the delete button will permantly delete account!";
    }
   
    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/login');
    }

    const handleDelete = async () => {
      const response = await axios.delete("/api/auth/delete", {
        headers: {'Content-Type' : 'application/json', 'Authorization' : `Bearer ${sessionStorage.getItem('accessToken')}`}
      });

      console.log(response.data);
      sessionStorage.clear();
      navigate('/login');
    }

  return (
    <section id="accounts">
        <h1 id="accountH1">Account</h1>
        <p id="message">Click Top Left to Sign In</p>

        <button disabled={!logStatus ? true: false} id="logoutB" onClick={handleLogout}>Logout</button>
        <button disabled={!logStatus ? true: false} id="deleteAccount" onClick={handleDelete}>Delete Account</button>
    </section>
  )
}

export default Account