import React from 'react';
import logo from './logo.svg';
//import Counter from './features/Counter/Counter';
import './App.css';
import Teslaheader from './components/Teslaheader';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Teslaheader></Teslaheader>
      <Home></Home>
    </div>
    
  );
}

export default App;