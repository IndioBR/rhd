import { Component } from 'react';
import './styles.css';

export default class Apresentation extends Component {
  render() {
    return (
      <div className='Apresentation'>
        <h2 className='apr-title'>React Hooks Demonstration</h2>
        <div className='apr-body'>
          <p>
            Hello, World! Welcome to my site.
          </p>
          <p>
            Here you'll find a resume of all React Hooks (I hope), how and where to use them.
          </p>
          <p className='apr-last-P'>
            Please enjoy!
          </p>
        </div>
      </div>
    )
  }
}