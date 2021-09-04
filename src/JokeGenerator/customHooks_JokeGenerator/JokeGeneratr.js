import React, { useState, useRef } from "react";
import useRandomJoke from "./useRandomJoke";

//    using Custom hooks

function JokeGeneratr() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("Atul");
  const [lastName, setLastName] = useState("kumar");

  const joke = useRandomJoke(firstName, lastName);

  const generator = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div className="app">
      <center>
        <h1>The Joke Generator</h1>
        <em>
          <strong>{joke}</strong>
        </em>

        <br />
        <form>
          <input
            placeholder="first name"
            // onChange={(e) => setFirstName(e.target.value)}
            ref={firstNameRef}
          />
          <input
            placeholder="last name"
            // onChange={(e) => setLastName(e.target.value)}
            ref={lastNameRef}
          />
          <button onClick={generator}>Generator Joke</button>
        </form>
      </center>
    </div>
  );
}

export default JokeGeneratr;
