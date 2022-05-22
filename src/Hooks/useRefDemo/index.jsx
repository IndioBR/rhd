import './styles.css';

function UseRefDemo() {
  return (
    <div className='UseRefDemo'>
      <h4>
        <a
          href='https://reactjs.org/docs/hooks-reference.html#useref'
          className='hook-link'
          target='_blank'
          rel='noreferrer'
        >
          useRef
        </a>
      </h4>
      <div className='hook-resume'>
        <p>
          <a
            href='https://reactjs.org/docs/hooks-reference.html#useref'
            className='hook-link'
            target='_blank'
            rel='noreferrer'
          >
            useRef
          </a> returns a mutable ref object whose .current property is initialized to the passed argument as initialValue.
        </p>
      </div>
      <div className="hook-syntax">
        <span>import {'{ useRef }'} from 'react'</span>
        <span>const something = useRef(initialvalue)</span>
      </div>
      <div className="hook-tips">
        <p>
          Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
        </p>
        <p>
          You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with {'<div ref={{myRef}} />'}, React will set its .current property to the corresponding DOM node whenever that node changes.
        </p>
      </div>
      <div className='hook-footer'>
        <p>Since this hook is more about "What gets done when ...", you can't test something like that here. Therefore, I recommend that you read the documentation in case something is missing.</p>
        <p>
          You can see the documentation <a
            className='hook-link'
            href='https://reactjs.org/docs/hooks-reference.html#useref'
            target='_blank'
            rel='noreferrer'
          >
            here
          </a>
        </p>
      </div>
    </div>
  )
}

export default UseRefDemo;