import { Link } from 'react-router-dom';

import logo from '../assets/logo-header.png';


const Header = () => {
  return (
    <header>
        <img src={logo} alt="logo Kasa" /> 
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/a-propos">À Propos</Link></li>
                </ul>
            </nav>
    </header>
  )
}

export default Header;