import React from 'react'

const CharacterSelect = ({characters, updateCharacterSelected}) => {
    
    const handleChange = function (event){
        const chosenCharacter = characters[event.target.value];
        updateCharacterSelected(chosenCharacter);
    }

    const characterOptions = characters.map((character, index) => {
        return <option value={index} key={index}>{character.name}</option>
    })

return(
    <>
    <p>Character Selector:</p>
    
    <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Character</option>
            {characterOptions}
    </select>
    </>
    )
}
export default CharacterSelect;