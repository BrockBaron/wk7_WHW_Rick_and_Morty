import React, {useEffect, useState} from 'react';
import CharacterSelect from '../components/CharacterSelect';
import CharacterDetail from '../components/CharacterDetail';

import LocationSelect from '../components/LocationSelect';
import LocationDetail from '../components/LocationDetail';

// import axios from 'axios';
// import CharacterDetails from '../components/CharacterDetail'
// import LocationDetails from '../components/LocationDetail'
// import EpisodeDetails from '../components/EpisodeDetail'

const RickAndMortyContainter = () => {

        const [characters, setCharacters] = useState([]);
        const [selectedCharacter, setSelectedCharacter] = useState(null);
        
        const [locations, setLocations] = useState([]);
        const [selectedLocation, setSelectedLocation] = useState(null);
        
        // const [episodes, setEpisodes] = useState([]);
        //const [selectedCharacter, setSelectedCharacter] = useState(null);
        
        
        useEffect(() =>{
            fetchCharacters();
            fetchLocations();
        }, [])
        
    

//Fetch Characters
    const fetchCharacters = function () {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(res => res.json())
        .then(characters => setCharacters(characters.results))
        .catch(err => {console.log(err);});
    }

    const updateCharacterSelected = function(newCharacter) {
        setSelectedCharacter(newCharacter);
    }

// Fetch Locations
    const fetchLocations = function () {
        fetch('https://rickandmortyapi.com/api/location/')
        .then(res => res.json())
        .then(locations => setLocations(locations.results))
        .catch(err => {console.log(err);});
    }

    const updateLocationSelected = function(newLocation) {
        setSelectedLocation(newLocation);
    }





// Fetch Episodes




    return(
        <> 
        < CharacterSelect characters = {characters} updateCharacterSelected = {updateCharacterSelected} />
        {selectedCharacter ? <CharacterDetail selectedCharacter={selectedCharacter} /> : null}
        
        < LocationSelect locations = {locations} updateLocationSelected = {updateLocationSelected} />
        {selectedLocation ? <LocationDetail selectedLocation={selectedLocation} /> : null}
        
        </>
    )
}


export default RickAndMortyContainter;


//     const fetchData = () => {
    //     
    //     // const locationsAPI = "https://rickandmortyapi.com/api/location/"
    //     // const episodesAPI = "https://rickandmortyapi.com/api/episode/"

    //     const getCharactersAPI = axios.get(charachtersAPI)
    //     // const getLocationsAPI = axios.get(locationsAPI)
    //     // const getEpisodesAPI = axios.get(episodesAPI)
         // const charactersAPI = "https://rickandmortyapi.com/api/character/"
    // 
    
    //    axios.all([getCharactersAPI])
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



    // useEffect(() => {
    //     fetchData()
    // },[])

    