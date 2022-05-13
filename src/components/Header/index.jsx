import { Component } from 'react';
import './styles.css';
import logo from '../../assets/react-logo.svg'

export default class Header extends Component {
  render() {
    return (
      <header className='Header'>
        <h1 className='header-logo'>
          <img
            src={logo}
            alt='react logo'
          />
          RHD
        </h1>
        <nav className='navbar-header'>
          <span>How it Works?</span>
          <span>Hooks</span>
          <a
            href='https://github.com/IndioBR'
            target='_blank'
            rel='noreferrer'
          >
            About me
          </a>
        </nav>
      </header>
    )
  }
}