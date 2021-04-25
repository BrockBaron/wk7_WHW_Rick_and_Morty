import React from 'react'
import {Howl, Howler} from 'howler';
import { jsx, css, Global, ClassNames } from '@emotion/react'
import anime from 'animejs/lib/anime.es.js';

const CharacterDetail = ({selectedCharacter}) => {
    return (

        <div>
            <h3>{selectedCharacter.name}</h3>
            <p>Status: {selectedCharacter.status}</p>
            <p>Species:{selectedCharacter.species}</p>
            <p>Gender: {selectedCharacter.gender}</p>
            <p>Origin: {selectedCharacter.origin.name}</p>
            <p>Current Location: {selectedCharacter.location.name}</p>
            <img src={selectedCharacter.image} alt={selectedCharacter.name} />
        </div>
)
}

export default CharacterDetail;


