// Write your Character component here
import React from 'react';
import styled from 'styled-components'

const StyledCharacter = styled.div`

width: 20%;
font-size: 2rem;
/* display: flex; */

text-align: center;
padding:1rem;
border-radius: 300px;
margin: 2rem;

background-color: black;
color: gold;
opacity: .5;

`


const Character = props => {
    return (
        <StyledCharacter>
           {props.info.name}   
            <button onClick={() => props.openDetails(props.info.id)}>
            +
            </button>
        </StyledCharacter>
    )
}



export default Character;
