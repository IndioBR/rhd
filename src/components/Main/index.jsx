import { Component } from 'react';
import './styles.css';
import UseEffectDemo from '../../Hooks/useEffectDemo';
import UseStateDemo from '../../Hooks/useStateDemo';
import Apresentation from '../Apresentation';
import UseCallbackDemo from '../../Hooks/useCallbackDemo';
import UseMemoDemo from '../../Hooks/useMemoDemo';
import UseRefDemo from '../../Hooks/useRefDemo';

export default class Main extends Component {
  render() {
    return (
      <main className='Main'>
        <Apresentation />
        <UseStateDemo />
        <UseEffectDemo />
        <UseCallbackDemo />
        <UseMemoDemo />
        <UseRefDemo />
      </main>
    )
  }
}