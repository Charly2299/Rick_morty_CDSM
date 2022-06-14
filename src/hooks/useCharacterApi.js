import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useCharacterApi = resident => {

    const [character, setCharacter] = useState()

useEffect(() => {
       axios.get(resident)
    .then(res=>setCharacter(res.data))
     .catch(error=>console.log(error))
}, [])


  return character
}

export default useCharacterApi