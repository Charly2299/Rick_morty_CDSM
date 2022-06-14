import React from 'react'
import useCharacterApi from '../hooks/useCharacterApi'

const Residentinfo = ({ resident }) => {

    const character = useCharacterApi(resident)

    console.log(character);
    return (
        <div className='card__container'>

            <div className='card-content'>

                <div className='card-img'>
                    <img src={character?.image} alt=""
                    />
                    <div className='status'>



                        <div className={character?.status}>


                            <p >Status: {character?.status}</p>

                        </div>

                    </div>
                </div>

                <div className='card-txt'>

                    <h2>{character?.name}</h2>

                    <p>Origin: {character?.origin.name}</p>
                    <p>Episodes where appear: {character?.episode.length}</p>
                </div>


            </div>
        </div>
    )
}

export default Residentinfo