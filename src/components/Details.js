import React, { useState, useEffect } from "react";
import axios from "axios";

const Details = (props) => {
  const { id, close } = props;
  const [info, setInfo] = useState();

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="infoCard">
      {info && (
        <>
          <p>Height: {info.height}</p>
          <p>Mass: {info.mass}</p>
          <p>Hair Color: {info.hair_color}</p>
          <p>Skin Color: {info.skin_color}</p>
          <p>Eye Color: {info.eye_color}</p>
          <p>Birth Year: {info.birth_year}</p>
          <p>Gender: {info.gender}</p>
          <p>
            Homeworld:{" "}
            <a href="{homeworld}">
              Click here to see where in the Galaxy I'm from!
            </a>
          </p>
        </>
      )}

      <button onClick={close}></button>
    </div>
  );
};
export default Details;
