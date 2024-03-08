import logo from './logo.svg';
import './App.css';
import Hello from './shadab.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hey its <code>shadab</code> and welcome to my first react app
        </p>
        <Hello/>
        <Hello/>
        <Hello/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
