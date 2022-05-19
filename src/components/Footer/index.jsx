import './styles.css';
import logo from '../../assets/react-logo.svg'

function Footer() {
  return (
    <footer className='Footer'>
      <h1 className='footer-logo'>
        <img
          src={logo}
          alt='react logo'
        />
        RHD
      </h1>
    </footer>
  );
};

export default Footer;