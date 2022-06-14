import { useState } from 'react'

import './App.css'
import Residentinfo from './components/Residentinfo'
import InputSearch from './components/InputSearch'
import Loader from './components/Loader'
import Location from './components/Location'
import useLocationApi from './hooks/useLocationApi'

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [searchLocation, setSearchLocation] = useState()

  const location = useLocationApi(setIsLoading, searchLocation)
  
  console.log(location);
  return (

    <div className="App">


<InputSearch setSearchLocation={setSearchLocation}/> 



      {
        isLoading ?

          <Loader/>
          
          : 
          
          <Location location={location} />
          
      }

<div className='cards'>
        {location?.residents.map(resident => 
          <Residentinfo 
          key={resident}
          resident={resident}/>
          
          )}
      </div>

    </div>


  )
}

export default App
