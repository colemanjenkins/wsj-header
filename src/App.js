import React from 'react';
import './App.css';
import Header from './Header';


function App() {
  let arr = []
  for (let i = 0; i < 100; i++) {
    arr.push("Random " + i);
  }
  return (
    <div className="App">
      <Header />
      <ul>
        {arr.map(element => {
          return <li>{element}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
