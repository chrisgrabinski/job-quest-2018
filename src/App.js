import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Input from "./components/Input";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [jokes, setJokes] = useState([]);
  const [firstName, setFirstName] = useState("Chuck");
  const [lastName, setLastName] = useState("Norris");
  const [jokesNumber, setJokesNumber] = useState(5);

  function fetchJoke(event) {
    event.preventDefault();

    setJokes([]);
    setIsLoading(true);

    fetch(
      `http://api.icndb.com/jokes/random/${jokesNumber}?${firstName &&
        `firstName=${firstName}`}${firstName && lastName && `&`}${lastName &&
        `lastName=${lastName}`}`
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        setIsLoading(false);
        setJokes(myJson.value);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form action="">
          <div>
            <Input
              type="text"
              label="First Name"
              name="firstName"
              value={firstName}
              onChange={event => setFirstName(event.target.value)}
            />
            <Input
              type="text"
              label="Last Name"
              name="lastName"
              value={lastName}
              onChange={event => setLastName(event.target.value)}
            />
            <Input
              type="number"
              label="Number of jokes"
              name="jokesNumber"
              value={jokesNumber}
              onChange={event => setJokesNumber(event.target.value)}
            />
          </div>
          <button type="submit" onClick={fetchJoke}>
            Fetch Joke
          </button>
        </form>
        <div>
          {isLoading && <p>Loading</p>}
          <ul>
            {jokes.map(({ id, joke }) => (
              <li key={id}>{joke.replace(/&quot;/g, '"')}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default App;
