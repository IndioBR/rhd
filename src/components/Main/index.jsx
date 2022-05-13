import { Component } from 'react';
import './styles.css'
import UseStateDemo from '../../Hooks/useStateDemo';
import Apresentation from '../Apresentation';

export default class Main extends Component {
  render() {
    return (
      <main className='Main'>
        <Apresentation />
        <UseStateDemo />
      </main>
    )
  }
}