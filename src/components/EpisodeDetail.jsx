import React from 'react'

const EpisodeDetail = ({selectedEpisode}) => {
    return (

        <div>
            <h3>{selectedEpisode.episode}</h3>
            <p>Name: {selectedEpisode.name}</p>
            <p>Air Date: {selectedEpisode.air_date}</p>
            {/* <p>Character:{selectedEpisode.characters}</p> */}
        </div>
)
}

export default EpisodeDetail;
