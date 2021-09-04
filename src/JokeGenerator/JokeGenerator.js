import React, { useEffect, useState } from "react";

function JokeGenerator() {
  const [joke, setJoke] = useState("");

  //   Custom Hook
  // const joke = useRandomJoke()

  useEffect(() => {
    const fetchJoke = async () =>
      await fetch(
        `http://api.icndb.com/jokes/random?firstName=Atul&lastName=Awasthi`
      )
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data.value.joke);
          setJoke(data.value.joke);
        });
    fetchJoke();
  }, []);

  return (
    <div className="app">
      <center>
        <h1>The Joke Generator</h1>
        <em>
          <i>{joke}</i>
        </em>

        <br />

        <button>Generator Joke</button>
      </center>
    </div>
  );
}

export default JokeGenerator;
