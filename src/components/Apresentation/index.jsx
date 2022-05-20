import { Component } from 'react';
import './styles.css';

export default class Apresentation extends Component {
  render() {
    return (
      <div className='Apresentation'>
        <h2 className='apr-title'>React Hooks Demonstration</h2>
        <div className='apr-body'>
          <p>
            Hello, Me! Welcome!
          </p>
          <p>
            This is a resume of all React Hooks.
          </p>
          <p className='apr-last-P'>
            Please enjoy!
          </p>
        </div>
      </div>
    )
  }
}