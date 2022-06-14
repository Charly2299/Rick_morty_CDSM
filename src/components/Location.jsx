import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Location = ({ location }) => {


    return (
        <div className='location__container'>

            <div className='location-content'>

                <div className='location-tittle'>
                    <h2>{location?.name}</h2>
                </div>

                <div className='location-txt'>

                    <p>Tipo: {location?.type}</p>
                    <p>Dimension: {location?.dimension}</p>
                    <p>Poblacion: {location?.residents.length}</p>


                </div>
            </div>

        </div>
    )
}

export default Location