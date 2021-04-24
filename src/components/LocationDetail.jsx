import React from 'react'

const LocationDetail = ({selectedLocation}) => {
    return (

        <div>
            <h3>{selectedLocation.name}</h3>
            <p>Type: {selectedLocation.type}</p>
            <p>Dimension:{selectedLocation.dimension}</p>
        </div>
)
}



export default LocationDetail;