import React, { useState, useEffect } from "react";
import { css } from "emotion";

import Input from "./components/Input";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [jokes, setJokes] = useState([]);
  const [firstName, setFirstName] = useState("Chuck");
  const [lastName, setLastName] = useState("Norris");
  const [jokesNumber, setJokesNumber] = useState(5);
  const [formIsDisabled, setFormIsDisabled] = useState(false);

  useEffect(() => {
    if (firstName.length === 0 || lastName.length === 0 || jokesNumber === 0) {
      setFormIsDisabled(true);
    } else {
      setFormIsDisabled(false);
    }
  });

  function fetchJoke(event) {
    event.preventDefault();

    setJokes([]);
    setIsLoading(true);

    fetch(
      `http://api.icndb.com/jokes/random/${jokesNumber}?firstName=${firstName}&lastName=${lastName}`
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
    <div
      className={css`
        max-width: 720px;
        padding: 0 7.5vw;
        margin: 0 auto;
      `}
    >
      <form
        action=""
        className={css`
          margin: 64px 0;
        `}
      >
        <div
          className={css`
            display: grid;
            gap: 16px;

            @media (min-width: 640px) {
              grid-template-columns: 1fr 1fr 0.5fr;
            }
          `}
        >
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
            min={1}
            value={jokesNumber}
            onChange={event => setJokesNumber(event.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={fetchJoke}
          disabled={formIsDisabled}
          className={css`
            background-color: ${!formIsDisabled ? `#f04242` : `#CCCCCC`};
            border: 0;
            color: white;
            cursor: ${!formIsDisabled ? `pointer` : `not-allowed`};
            display: block;
            font-size: 18px;
            font-weight: bold;
            height: 56px;
            margin: 32px auto 0;
            padding: 0 28px;
          `}
        >
          Show me some jokes
        </button>
      </form>
      <div>
        {isLoading && <p>Loading…</p>}
        <ul
          className={css`
            list-style: none;
            margin: 0;
            padding: 0;
          `}
        >
          {jokes.map(({ id, joke }) => (
            <li key={id}>
              <div
                className={css`
                  font-family: monospace;
                  font-size: 18px;
                  padding: 16px;
                  transition: background-color 150ms
                    cubic-bezier(0.455, 0.03, 0.515, 0.955);

                  &:hover {
                    background-color: #ffe900;
                  }
                `}
              >
                {joke.replace(/&quot;/g, '"')}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
