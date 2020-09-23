import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
