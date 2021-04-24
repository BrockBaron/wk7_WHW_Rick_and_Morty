import React from 'react'

const EpisodeSelect = ({episodes, updateEpisodeSelected}) => {
    
    const handleChange = function (event){
        const chosenEpisode = episodes[event.target.value];
        updateEpisodeSelected(chosenEpisode);
    }

    const episodeOptions = episodes.map((episode, index) => {
        return <option value={index} key={index}>{episode.episode}</option>
    })

return(
    <>
    <p>Episode Selector:</p>
    
    <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose an Episode</option>
            {episodeOptions}
    </select>
    </>
    )
}
export default EpisodeSelect;