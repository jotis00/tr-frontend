import { useRef, useState, useEffect} from "react"
import axios from "../api/axios";
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const LOGIN_URL = "/api/auth/signin";

const Login = () => {
    sessionStorage.clear();
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { setAuth } = useAuth;
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
   
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => { 
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({username: user, password: pwd}),
                {
                    headers: { 'Content-Type' : 'application/json'}
                }
            );

            const accessToken = response?.data.accessToken;
            const roles = response?.data.roles;
            const email = response?.data.email;

            sessionStorage.setItem("loggedIn", true)
            sessionStorage.setItem("accessToken", accessToken);
            sessionStorage.setItem("user", user);
            sessionStorage.setItem("email", email);
            
            setAuth({user, roles, accessToken});
            setUser('');
            setPwd('');
            navigate('/testselection');
        }
        catch (err) {
            if (!err?.response) {
                navigate('/testselection');
            } else {
                setErrMsg(err.data);
            }
        }
        setErrMsg("error");
    }

    const bypassLogIn = () => {
        navigate('/testselection');
    }
    return (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username"> Username:</label>
                <input 
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                />
                <label htmlFor="password"> Password:</label>
                <input 
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                />
                <button>Sign In</button>
                <p>
                    Need an Account?<br />
                    <span className="line">
                    <Link to="/register">Sign Up</Link>
                    </span>
                </p>
            </form>
                <button id="bypassButton" onClick={bypassLogIn}>GUEST</button>
        </section>
    )
}

export default Login