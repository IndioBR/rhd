import { useState } from 'react';
import './styles.css';

const UseStateDemo = () => {
  const [name, setName] = useState('')
  const [change, setChange] = useState('');
  const [initial, setInitial] = useState('');
  const [empty] = useState();


  const hookTitle = '{ useState }';

  function handleCapitalize(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  }

  function handleType(value) {
    if (value.length === 0) {
      return setInitial(empty);
    };

    if (Number(value) || value[0] === '0' || value.includes(',')) {
      return setInitial(value)
    }

    if (value === 'false' || value === 'true' || value === 'null') {
      return setInitial(value);
    };

    if (typeof value === 'string') {
      return setInitial("'" + value + "'");
    }
  };

  return (
    <div className='UseStateDemo'>
      <h4>
        <a
          href='https://reactjs.org/docs/hooks-reference.html#usestate'
          className='hook-link'
          target='_blank'
          rel='noreferrer'
        >
          useState
        </a>
      </h4>
      <div className='hook-resume'>
        <p>
          <a
            href='https://reactjs.org/docs/hooks-reference.html#usestate'
            className='hook-link'
            target='_blank'
            rel='noreferrer'
          >
            useState
          </a> is a state controller, that helps with changes in the page and make the application less static.
        </p>
      </div>
      <div className="hook-syntax">
        <span>import {hookTitle} from 'react'</span>
        <span>const [state, setState] = useState(initialState);</span>
      </div>
      <div className="hook-tips">
        <p>
          To apply into your project, here somethings you have to know:
        </p>
        <ul>
          <li>The "initialState" is the default value of the variable. It can be a String, Number, Boolean OR null.</li>
          <li>useState recives TWO values.</li>
          <li>The Getter Value is the same that "initialState" value, but do not need to be the same name.</li>
          <li>The Setter Value is a funcion where you change the "initialState".</li>
          <li>For good practice, don't change the type of the "initialState". If it's a String, don't set it like a number or boolean.</li>
        </ul>
      </div>
      <p className='qstn'>Let's Code?</p>
      <div className='coding-hooks'>
        <p className='code-view'>const [{name}, {'set' + handleCapitalize(name)}] = useState({initial})</p>
        <div className="setStateNameDiv">
          <label htmlFor='set-state-name'>Name your state:</label>
          <input type="text" id='set-state-name' onChange={e => setName(e.target.value)} />
        </div>
        <div className="setInitialValueDiv">
          <label htmlFor='set-initial-value'>What the value of the state?</label>
          <input
            type="text"
            id='set-initial-value'
            onChange={e => handleType(e.target.value)
            }
          />
        </div>

        <div className='setChangeDiv'>
          <label htmlFor='set-change'>Change the value of your state</label>
          <input type='text' id='set-change' onChange={e => setChange(e.target.value)} />
        </div>
      </div>
      <div className='testing-code'>
        <p>
          The inital state is: <br /> <strong>{initial}</strong>
        </p>
        <p>
          The current state is: <br /> <strong>{change}</strong>
        </p>
      </div>
      <div className='hook-footer'>
        <p>
          Did you get it? useState isn't that hard, right?
        </p>
        <p>
          You can set the state as much as you want during the code. It's just call the Setter, passing the value you want and <i>voilá</i>.
        </p>
        <p>
          You can see the documentation <a className='hook-link' href='https://reactjs.org/docs/hooks-reference.html#usestate'>here</a>
        </p>
      </div>
    </div>

  )
}

export default UseStateDemo