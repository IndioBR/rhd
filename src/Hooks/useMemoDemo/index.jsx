import './styles.css'

function UseMemoDemo() {
  return (
    <div className='UseMemoDemo'>
      <h4>
        <a
          href='https://reactjs.org/docs/hooks-reference.html#usememo'
          className='hook-link'
          target='_blank'
          rel='noreferrer'
        >
          useMemo
        </a>
      </h4>
      <div className='hook-resume'>
        <p>
          <a
            href='https://reactjs.org/docs/hooks-reference.html#usememo'
            className='hook-link'
            target='_blank'
            rel='noreferrer'
          >
            useMemo
          </a> Returns a memoized value.
        </p>
      </div>
      <div className="hook-syntax">
        <span>import {'{ useMemo }'} from 'react'</span>
        <span>const something = useMemo(() => <i>fn</i>, [ ])</span>
      </div>
      <div className="hook-tips">
        <p>Did you notice that useMemo hook have the exact syntax that useCallback?</p>
        <p>The thing is: while useCallback memorizes a FUNCTION, useMemo memorizes a VALUE that the function returns.</p>
        <p>useCallback({'fn, [];'})</p>
        <p>useMemo({'() => fn, [];'})</p>
      </div>
      <div className='hook-footer'>
        <p>Since this hook is more about "What gets done when ...", you can't test something like that here. Therefore, I recommend that you read the documentation in case something is missing.</p>
        <p>
          You can see the documentation <a
            className='hook-link'
            href='https://reactjs.org/docs/hooks-reference.html#usememo'
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

export default UseMemoDemo;