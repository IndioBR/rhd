import { Component } from 'react';
import './styles.css';

export default class Header extends Component {
  render() {
    return (
      <header className='Header'>
        <h1>
          RHD
        </h1>
        <nav>
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