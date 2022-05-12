import { Component } from 'react';
import './styles.css'
import UseStateDemo from '../../Hooks/useStateDemo';

export default class Main extends Component {
  render() {
    return (
      <main className='Main'>
        <h1>Main</h1>
        <UseStateDemo />
      </main>
    )
  }
}