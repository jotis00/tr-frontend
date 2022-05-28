import { useNavigate } from 'react-router-dom';

const Account = () => {
    const navigate = useNavigate();

    const username = sessionStorage.getItem("user")
    
    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/login');
    }

    const handleDelete = () => {
      //axios delete request
    }

  return (
    <section id="accounts">
        <h1 id="accountH1">Account</h1>
        <p value={username}></p>
        <p>Please note that delete functionality is currently unavailable.</p>

        <button id="logoutB" onClick={handleLogout}>Logout</button>
        <button id="deleteAccount" onClick={handleDelete}>Delete Account</button>
    </section>
  )
}

export default Account