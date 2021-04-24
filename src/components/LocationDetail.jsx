import React from 'react'

const LocationDetail = ({selectedLocation}) => {
    return (

        <div>
            <h3>{selectedLocation.name}</h3>
            <p>Type: {selectedLocation.type}</p>
            <p>Dimension: {selectedLocation.dimension}</p>
            {/* <p>Residents:{selectedLocation.residents}</p> */}
        </div>
)
}



export default LocationDetail;