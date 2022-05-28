import Brain from '../assets/brain.png'
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();
    const handleImgClick = () => {
        navigate("/login");
    }

  return (
    <nav>
        <ul>
            <li><img id="navImg" src={Brain} alt="logo1" style={{ width: '50px'}} onClick={handleImgClick}/></li>
            <li><p id='navName' onClick={handleImgClick}>TRAINREC</p></li>
            <li><Link to="/account">ACCOUNT</Link></li>
            <li><Link to="/testselection">TESTS</Link></li>
            <li><Link to="/progressgraphs">PROGRESS GRAPHS</Link></li>          
        </ul>
    </nav>
  )
}

export default Nav