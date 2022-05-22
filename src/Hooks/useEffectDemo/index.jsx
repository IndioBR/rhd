import './styles.css'

const UseEffectDemo = () => {

  const hookTitle = '{ useEffect }';

  // function handleCapitalize(str) {
  //   const lower = str.toLowerCase();
  //   return str.charAt(0).toUpperCase() + lower.slice(1);
  // }

  return (
    <div className='UseEffectDemo'>
      <h4>
        <a
          href='https://reactjs.org/docs/hooks-reference.html#useeffect'
          className='hook-link'
          target='_blank'
          rel='noreferrer'
        >
          useEffect
        </a>
      </h4>
      <div className='hook-resume'>
        <p>
          <a
            href='https://reactjs.org/docs/hooks-reference.html#useeffect'
            className='hook-link'
            target='_blank'
            rel='noreferrer'
          >
            useEffect
          </a> works like 'Lifecycle Methods'. It'll add, reload or delete information on the page, according how you use.
        </p>
      </div>
      <div className="hook-syntax">
        <span>import {hookTitle} from 'react'</span>
        <span>useEffect(( ) => {"{ }"}, [ ])</span>
      </div>
      <div className="hook-tips">
        <p>
          The 'useEffect' hook receives TWO parameters. A callback function and a Array of dependencies. The function will be executed under THREE conditions:
        </p>
        <ol>
          <li>NO DEPENDENCIES ARRAY: Will reload always.</li>
          <li>EMPTY ARRAY: Will reload ONCE, as soon as page load</li>
          <li>DEPENDENCIES INSIDE ARRAY CHANGE: If there's "var", "const" or "let" inside the callback function, you MUST put it inside the dependency array. Only if some dependency change, will run the function.</li>
        </ol>
        <p>Bonus:</p>
        <ul>
          <li>You MUST NOT use this hook inside a condition. Use the condition inside the hook;</li>
          <li>You MUST NOT use Asynchronous function inside this hook. Create the async function outside.</li>
          <li>If you use a 'SETTER' inside useEffect AND the thing you are setting is on the dependency, you will create a loop. Maybe your application crashes, or your machine turn off.  Be careful.</li>
        </ul>
      </div>
      <p className='qstn'>Let's Code?</p>
      <div className='coding-hooks'>
        <div className='no-array'>
          <p>Let's say you want to receive posts on your homepage. Remember: This is an exemple, you can see this hook a little more complex!</p>
          <p className='code-view'><code>const posts = []</code></p>
          <p className='code-view'><code>useEffect(() => {'{fetch(http://some.api.com/posts).then(response => posts.push(response.json))}'})</code></p>
        </div>
        <div className='no-dep'>
          <p>But, if you want to load posts into you homepage ONCE:</p>
          <p className='code-view'><code>const posts = []</code></p>
          <p className='code-view'><code>useEffect(() => {'{fetch(http://some.api.com/posts).then(response => posts.push(response.json))}, []'})</code></p>
        </div>
        <div className='w-dep'>
          <p>At last, if you want to add posts into you homepage:</p>
          <p className='code-view'><code>const posts = []</code></p>
          <p className='code-view'><code>useEffect(() => {'{fetch(http://some.api.com/posts).then(response => posts.push(response.json))}, [posts]'})</code></p>
          <p className='code-view'>{'<button onClick={posts.push({ post: 5 })}>Add post</button>'}</p>
        </div>
      </div>
      <div className='hook-footer'>
        <p>Since this hook is more about "What gets done when ...", you can't test something like that here. Therefore, I recommend that you read the documentation in case something is missing.</p>
        <p>
          You can see the documentation <a className='hook-link' href='https://reactjs.org/docs/hooks-reference.html#useeffect' target='_blank'
            rel='noreferrer'>here</a>
        </p>
      </div>
    </div>
  )
};

export default UseEffectDemo;