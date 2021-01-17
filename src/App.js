import logo from './logo.svg';
import './App.css';
import { atom, useRecoilState } from 'recoil';

const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: 'Learn React Mine', // default value (aka initial value)
});

function App() {
  const [text, setText] = useRecoilState(textState);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          {text}
        </a>
      </header>
    </div>
  );
}

export default App;
