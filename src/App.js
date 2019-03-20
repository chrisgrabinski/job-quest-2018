import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [jokes, setJokes] = useState([]);
  const [firstName, setFirstName] = useState("Chuck");
  const [lastName, setLastName] = useState("Norris");
  const [jokesNumber, setJokesNumber] = useState(1);

  function fetchJoke(event) {
    event.preventDefault();

    fetch(
      `http://api.icndb.com/jokes/random/${jokesNumber}?${firstName &&
        `firstName=${firstName}`}${firstName && lastName && `&`}${lastName &&
        `lastName=${lastName}`}`
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        setJokes(myJson.value);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form action="">
          <div>
            <label>
              First name
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={event => setFirstName(event.target.value)}
              />
            </label>
            <label>
              Last name
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={event => setLastName(event.target.value)}
              />
            </label>
            <label>
              Number of jokes
              <input
                type="number"
                name="jokesNumber"
                value={jokesNumber}
                onChange={event => setJokesNumber(event.target.value)}
              />
            </label>
          </div>
          <button type="submit" onClick={fetchJoke}>
            Fetch Joke
          </button>
        </form>
        <ul>
          {jokes.map(({ joke }) => (
            <li key={joke}>{joke}</li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default App;
