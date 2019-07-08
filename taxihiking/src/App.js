import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Menu from './components/Menu'
import Outback from './asset/images/outback.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        
      </header>
      <div className="body">
        <Menu menuName="OUTBACK" src={Outback}></Menu>

      </div>
      <footer>

      </footer>
    </div>
  );
}

export default App;
