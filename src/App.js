import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [joke, setJoke] = useState("Joke");

  function fetchJoke() {
    fetch('http://api.icndb.com/jokes/random/')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setJoke(myJson.value.joke)
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {joke}
          </p>
        <button onClick={fetchJoke}>Fetch Joke</button>

      </header>
    </div>
  );
}

export default App;
