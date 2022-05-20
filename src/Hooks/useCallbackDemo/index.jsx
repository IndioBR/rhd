import './styles.css';

function UseCallbackDemo() {
  return (
    <div className='UseCallbackDemo'>
      <h4>
        <a
          href='https://reactjs.org/docs/hooks-reference.html#usecallback'
          className='hook-link'
          target='_blank'
          rel='noreferrer'
        >
          useCallback
        </a>
      </h4>
      <div className='hook-resume'>
        <p>
          <a
            href='https://reactjs.org/docs/hooks-reference.html#usecallback'
            className='hook-link'
            target='_blank'
            rel='noreferrer'
          >
            useCallback
          </a> Returns a memoized callback function.
        </p>
      </div>
      <div className="hook-syntax">
        <span>import {'{ useCallback }'} from 'react'</span>
        <span>const something = useCallback(() => {'{ }'}, [ ])</span>
      </div>
      <div className="hook-tips">
        <p>Suppose you have a component that renders on page load. Everytime the page reload, this component also do it. Perhaps this reloading will make your site slower than usual.</p>
        <p>The useCallback hook allows you to send some functions to the memory, which will only change if the dependencies inside the array change.</p>
        <p>This will prevent some function from rendering for no reason.</p>
        <ul>
          <li>Pass an inline callback and an array of dependencies.</li>
          <li>Use this hook ONLY in a case that some function does not need to re-render.</li>
          <li>This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.</li>
        </ul>
      </div>
      <div className='hook-footer'>
        <p>Since this hook is more about "What gets done when ...", you can't test something like that here. Therefore, I recommend that you read the documentation in case something is missing.</p>
        <p>
          You can see the documentation <a className='hook-link' href='https://reactjs.org/docs/hooks-reference.html#usecallback'>here</a>
        </p>
      </div>
    </div>
  )
}

export default UseCallbackDemo;