import { useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';


const Account = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState();


    var username = sessionStorage.getItem("user");
    var email = sessionStorage.getItem("email");

    console.log(username, email);
    if (sessionStorage.getItem("accessToken")) {
      setUser(username);
    }

    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/login');

        outputUsername.textContent = '';
        outputEmail.textContent = '';
    }

  return (
    <section id="accounts">
        <h1 id="accountH1">Account</h1>

        <label htmlFor="username">Username: </label>
        <label  id="username"
                value={user}
        >ID</label>

        <label htmlFor="email">Email: </label>
        <label id="email">Email</label>

        <button id="logoutB" onClick={handleLogout}>Logout</button>
    </section>
  )
}

export default Account