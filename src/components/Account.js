import { useRef, useState, useEffect} from "react"
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth'


const Account = () => {
    const navigate = useNavigate();
    const { auth } = useAuth();

    if (sessionStorage.getItem("accessToken")) {
        var outputUsername = document.getElementById("username");
        outputUsername.textContent = auth?.user;
    }

    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/login');
    }

  return (
    <section id="accounts">
        <h1 id="accountH1">Account</h1>
        <label htmlFor="username">Username: </label>
        <label id="username"/>
        <label htmlFor="password">Password: </label>
        <button id="logoutB" onClick={handleLogout}>Logout</button>

    
    </section>


  )
}

export default Account