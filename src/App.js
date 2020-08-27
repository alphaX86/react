import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello there!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
            Need anything more?
          </p>
        <a
          className="App-link"
          href="https://github.com/alphaX86"
          rel="noopener noreferrer"
          target="_blank"
          >
            Know me!
          </a>
        <a
          className="App-link"
          href="https://kryome.carrd.co"
          rel="noopener referrer"
          >
            My Carrd
          </a>
      </header>
    </div>
  );
}

export default App;
