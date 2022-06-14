import axios from 'axios'
import { useEffect, useState } from 'react'

const useLocationApi = (setIsLoading, searchLocation) => {

    const [location, setLocation] = useState()

    useEffect(() => {
        let locationNumber
        if (searchLocation) {

            locationNumber = searchLocation



        }
        else {
            locationNumber = Math.ceil(Math.random() * 126)

        }

        console.log(locationNumber);
        const URL = `https://rickandmortyapi.com/api/location/${locationNumber}`
        axios.get(URL)
            .then(res => {
                setLocation(res.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))

    }, [searchLocation])


    return location
}

export default useLocationApi