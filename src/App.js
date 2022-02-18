import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";
import Details from "./components/Details";

const App = () => {
  const [starWarsCharacters, setStarWarsCharacters] = useState([]);
  const [swCharacterId, setSwCharacterId] = useState(null);

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
        const characters = res.data
        characters.forEach((char, index) => {
          char.id = index + 1
        })
        setStarWarsCharacters(characters)
      })
      .catch((err) => console.log(err));
  }, []);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      { starWarsCharacters.length > 0 ? starWarsCharacters.map((char) => {
          return (
            <Character
              info={char}
              key={char.id}
              openDetails={openDetails}
            />
          );
        }) : <h3>Loading...</h3>}
        {
        swCharacterId && <Details id={swCharacterId} close={closeDetails}/>
}
      )
    </div>
  );
};

export default App;
