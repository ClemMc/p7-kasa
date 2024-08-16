import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/"><img src={logo} alt="Logo Kasa" /></Link>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">À propos</NavLink>
      </nav>
    </header>
  );
};

export default Header;
