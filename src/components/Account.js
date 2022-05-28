import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const Account = () => {
    const navigate = useNavigate();
   
    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/login');
    }

    const handleDelete = async () => {
      const response = await axios.delete("/api/delete", {
        headers: {'Content-Type' : 'application/json', 'Authorization' : `Bearer ${sessionStorage.getItem('accessToken')}`}
      });

      console.log(response.data);
      
      sessionStorage.clear();
      navigate('/login');
    }

  return (
    <section id="accounts">
        <h1 id="accountH1">Account</h1>
        <p>Delete functionality is currently unavailable.</p>

        <button id="logoutB" onClick={handleLogout}>Logout</button>
        <button id="deleteAccount" onClick={handleDelete}>Delete Account</button>
    </section>
  )
}

export default Account