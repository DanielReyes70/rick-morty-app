import React from 'react'

function Player() {

  let audio = new Audio("./song.mp3")
  const start = () => {
      audio.play()
  }
  const stop = () => {
      audio.pause()
  }

  return (
    <div className='text-center'>
      <button className='m-2' onClick={start}>Play song</button>
      <button className='m-2' onClick={stop}>Stop song</button>
    </div>
  )
}

export default Player