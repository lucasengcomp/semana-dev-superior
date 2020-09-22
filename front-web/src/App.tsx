import React from 'react';
import './App.css';
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      <div>
        <Hello message="Lucas"/>
        <Hello message="Ana"/>
        <Hello message="Nelio"/>
        <Hello message="Washington"/>
      </div>
    </div>
  );
}

export default App;
