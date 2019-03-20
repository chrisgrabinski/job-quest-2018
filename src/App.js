import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [joke, setJoke] = useState();
  const [firstName, setFirstName] = useState("Chuck");
  const [lastName, setLastName] = useState("Norris");

  function fetchJoke() {
    fetch(
      `http://api.icndb.com/jokes/random/?${firstName &&
        `firstName=${firstName}`}${firstName && lastName && `&`}${lastName &&
        `lastName=${lastName}`}`
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        setJoke(myJson.value.joke);
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
          </div>
        </form>
        <p>{joke}</p>
        <button onClick={fetchJoke}>Fetch Joke</button>
      </header>
    </div>
  );
};

export default App;
