// Write your Character component here
import React from 'react';

const Character = props => {
    return (
        <div className='character'>
            {props.info.name}
            <button onClick={() => props.openDetails(props.id)}>
              +  
            </button>
        </div>
    )
}

export default Character;
