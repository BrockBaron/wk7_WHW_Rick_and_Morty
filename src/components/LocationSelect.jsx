import React from 'react'

const LocationSelect = ({locations, updateLocationSelected}) => {
    
    const handleChange = function (event){
        const chosenLocation = locations[event.target.value];
        updateLocationSelected(chosenLocation);
    }

    const locationOptions = locations.map((location, index) => {
        return <option value={index} key={index}>{location.name}</option>
    })

return(
    <>
    <p>Location:</p>
    
    <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Location</option>
            {locationOptions}
    </select>
    </>
    )
}
export default LocationSelect;