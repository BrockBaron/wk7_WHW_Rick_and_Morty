import React, {useEffect, useState} from 'react';
import CharacterSelect from '../components/CharacterSelect';

import axios from 'axios';
// import CharacterDetails from '../components/CharacterDetail'
// import LocationDetails from '../components/LocationDetail'
// import EpisodeDetails from '../components/EpisodeDetail'

const RickAndMortyContainter = () => {

        const [characters, setCharacters] = useState([]);
        const [selectedCharacter, setSelectedCharacter] = useState(null);
        // const [location, setLocation] = useState([]);
        // const [episode, setEpisode] = useState([]);
        
        // const charactersAPI = "https://rickandmortyapi.com/api/character/"
        
        useEffect(() =>{
            fetchCharacters();
        }, [])
        
    //     const fetchData = () => {
    //     
    //     // const locationsAPI = "https://rickandmortyapi.com/api/location/"
    //     // const episodesAPI = "https://rickandmortyapi.com/api/episode/"

    //     const getCharactersAPI = axios.get(charachtersAPI)
    //     // const getLocationsAPI = axios.get(locationsAPI)
    //     // const getEpisodesAPI = axios.get(episodesAPI)
        
    //     axios.all([getCharactersAPI])
    //     .then(axios.spread((...allData) => {
    //             const allCharacters = allData[0]
    //             // const allLoactions = allData[1]
    //             // const allEpisodes = allData[2]

    //             console.log(allCharacters)
    //             // console.log(allLoactions)
    //             // console.log(allEpisodes)

    //             setCharacter(allCharacters)
    //             // setLocation(allLoactions)
    //             // setEpisode(allEpisodes)
    //         })
    //     )
    //     .catch(error => console.log('Error'))
    // }


    const fetchCharacters = function () {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(res => res.json())
        .then(characters => setCharacters(characters.results))
    }

    const updateCharacterSelected = function(newCharacter) {
        setSelectedCharacter(newCharacter);
    }



    // useEffect(() => {
    //     fetchData()
    // },[])

    



    return(
        <> 
        Rick & morty containers
        <p>< CharacterSelect characters = {characters} updateCharacterSelected = {updateCharacterSelected} /></p>
        


        </>
    )
}


export default RickAndMortyContainter;