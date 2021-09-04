import { useEffect, useState } from "react";

function useRandomJoke(firstName, lastName) {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const fetchJoke = async () =>
      await fetch(
        `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
      )
        .then((res) => res.json())
        .then((data) => {
             //  console.log(data.value.joke);
          setJoke(data.value.joke);
        });
    fetchJoke();
  }, [firstName, lastName]);
  return joke;
}

export default useRandomJoke;
