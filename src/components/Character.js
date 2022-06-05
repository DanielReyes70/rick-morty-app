import React from 'react'

function character({picture, name}) {

  return (
    <div className='flex flex-col items-center justify-center m-4 w-34'>
      <img src={picture} alt={`${name} profile pic`} className='rounded-full w-44'/>
      <div className='text-center m-4'>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default character