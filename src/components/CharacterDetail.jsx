import React from 'react'

const CharacterDetail = ({selectedCharacter}) => {
    return (

        <div>
            <h3>{selectedCharacter.name}</h3>
            <p>Status: {selectedCharacter.status}</p>
            <p>Species:{selectedCharacter.species}</p>
            <p>Gender: {selectedCharacter.gender}</p>
            <p>Origin: {selectedCharacter.origin.name}</p>
            <img src={selectedCharacter.image} alt={selectedCharacter.name} />
        </div>
)
}



export default CharacterDetail;
