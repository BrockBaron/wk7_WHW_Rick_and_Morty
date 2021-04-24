import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import CharacterDetails from '../components/CharacterDetail'
// import LocationDetails from '../components/LocationDetail'
// import EpisodeDetails from '../components/EpisodeDetail'

const RickAndMortyContainter = () => {

        const [character, setcharacter] = useState([]);
        const [location, setLocation] = useState([]);
        const [episode, setEpisode] = useState([]);

        const fetchData = () => {
        const charachtersAPI = "https://rickandmortyapi.com/api/character/"
        const locationsAPI = "https://rickandmortyapi.com/api/location/"
        const episodesAPI = "https://rickandmortyapi.com/api/episode/"

        const getCharactersAPI = axios.get(charachtersAPI)
        const getLocationsAPI = axios.get(locationsAPI)
        const getEpisodesAPI = axios.get(episodesAPI)
        
        axios.all([getCharactersAPI, getLocationsAPI, getEpisodesAPI])
        .then(axios.spread((...allData) => {
                const allCharacters = allData[0]
                const allLoactions = allData[1]
                const allEpisodes = allData[2]

                console.log(allCharacters)
                console.log(allLoactions)
                console.log(allEpisodes)
            })
        )
    }

    useEffect(() => {
        fetchData()
    },[])


    return(
        <> 


        </>
    )
}


export default RickAndMortyContainter;