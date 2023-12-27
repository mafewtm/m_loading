import React from 'react'
import Clip from '../assets/video.mp4'

function Audio() {

  return (
    <React.StrictMode>
      <div id="video">
        <video loop autoPlay>
          <source src={Clip} type="video/mp4" />
        </video>
      </div>
    </React.StrictMode>
  )
}

export default Audio
