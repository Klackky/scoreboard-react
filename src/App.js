import React, { Component } from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <main>
          <div className="scoreboard">
          <Scoreboard />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
