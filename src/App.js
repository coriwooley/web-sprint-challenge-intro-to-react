import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";
import Details from "./components/Details";

const App = () => {
  const [starWarsCharacters, setStarWarsCharacters] = useState([]);
  const [swCharacterId, setSwCharacterId] = useState(null);
  const [error, setError] = useState(null);

  const openDetails = (id) => {
    setSwCharacterId(id);
  };

  const closeDetails = () => {
    setSwCharacterId(null);
  };

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        setStarWarsCharacters(res.data);

        res.data.map((char, index) => {
          return setSwCharacterId(index + 1);
        });
        console.log(swCharacterId)
      })
      .catch((err) => setError(true));
  }, []);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {error && <h2>These aren't the droids you are looking for.</h2>}
      {starWarsCharacters.length > 0 ? (
        starWarsCharacters.map((char, index) => {
          return (
            <Character
              info={char}
              id={index + 1}
              key={index + 1}
              openDetails={openDetails}
            />
          );
        })
      ) : (
        <h3>Loading...</h3>
      )}
      {starWarsCharacters.map((char, index) => {
        return (
          swCharacterId && (
            <Details
              id={index + 1}
              key={index + 1}
              close={closeDetails}
              name={char.name}
            />
          )
        );
      })}
      )
    </div>
  );
};

export default App;
