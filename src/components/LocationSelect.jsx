import React from 'react'

const LocationSelect = ({locations, updateLocationSelected}) => {
    
    const handleChange = function (event){
        const chosenLocation = locations[event.target.value];
        updateLocationSelected(chosenLocation);
    }

    const locationOptions = locations.map((location, id) => {
        return <option value={id} key={id}>{location.name}</option>
    })

return(
    <>
    <p>Location Selector:</p>
    
    <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Location</option>
            {locationOptions}
    </select>
    </>
    )
}
export default LocationSelect;