import React from 'react';
import logo from './logo.svg';
import './App.css';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <div className="App">
      <p>
        Hello World
      </p>
      <div>
        <TicTacToe></TicTacToe>
      </div>
    </div>
  );
}

export default App;
