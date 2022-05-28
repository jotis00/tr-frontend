import { useNavigate } from 'react-router-dom';

const Account = () => {
    const navigate = useNavigate();
    var outputUsername = document.getElementById("username");
    var outputEmail = document.getElementById("email");
    var username = sessionStorage.getItem("user");
    var email = sessionStorage.getItem("email");

    if (sessionStorage.getItem("accessToken")) {
        outputUsername.textContent = username;
        outputEmail.textContent = email;
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
        <label id="username">ID</label>

        <label htmlFor="email">Email: </label>
        <label id="email">Email</label>

        <button id="logoutB" onClick={handleLogout}>Logout</button>
    </section>
  )
}

export default Account