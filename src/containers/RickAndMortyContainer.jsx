import React, {useEffect, useState} from 'react';
import axios from 'axios';

const RickAndMortyContainter = () => {

    const [character, setcharacter] = useState([]);
    const [location, setLocation] = useState([]);
    const [episode, setEpisode] = useState([]);

    const fetchData = () => {
        const charachtersAPI = "https://rickandmortyapi.com/api/character"
        const locationsAPI = "https://rickandmortyapi.com/api/location"
        const episodesAPI = "https://rickandmortyapi.com/api/episodes"

        const getCharactersAPI = axios.get(charachtersAPI)
        const getLocationsAPI = axios.get(locationsAPI)
        const getEpisodesAPI = axios.get(episodesAPI)
        axios.all([getCharactersAPI, getLocationsAPI, getEpisodesAPI])

        


    }

    useEffect () => {
      
    }

    return(
        <> 


        </>
    )
}


export default RickAndMortyContainter;