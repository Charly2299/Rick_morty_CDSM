import React from 'react'

const InputSearch = ({setSearchLocation}) => {

    const searchLocation = e =>{
        e.preventDefault()
        setSearchLocation(e.target.children[0].value)
    }

    

 

  return (
    <div className='header__contain'>

  
        <form    className='header-content' onSubmit={searchLocation} action="">

<input type="number" required placeholder='type a location "id" from 1-126'  min="1" max="126" />
<button   >Search</button>

        </form>
        
        </div>
  )
}

export default InputSearch