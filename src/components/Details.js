import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledDetails = styled.div`
width: 50%;
background-color: white;
padding: 5rem;
border-radius: 750px;
font-size: 1.5rem;
opacity: .7;
text-align: center;
margin: auto;

`



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
      
    <StyledDetails>
      {info && (
        <>

          <h2>{info.name}</h2>
          <p>Height: {info.height}</p>
          <p>Mass: {info.mass}</p>
          <p>Hair Color: {info.hair_color}</p>
          <p>Skin Color: {info.skin_color}</p>
          <p>Eye Color: {info.eye_color}</p>
          <p>Birth Year: {info.birth_year}</p>
          <p>Gender: {info.gender}</p>
          <p>
            Homeworld:{" "}
            <a href={info.homeworld}>
              Click here to see where in the Galaxy I'm from!
            </a>
          </p>
        </>
      )}

      <button onClick={close}>Close</button>
    </StyledDetails>
    
  );
};
export default Details;
