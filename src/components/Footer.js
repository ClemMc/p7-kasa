import '../styles/footer.scss';
import logo from '../assets/darklogo.svg';

const Footer = () => {
  return (
    <footer className="footer">
        <div className='banner'>
            <img src={logo} alt="Logo Kasa" />
            <p>&copy; 2020 Kasa. All rights reserved</p>
        </div>
    </footer>
  );
};

export default Footer;
