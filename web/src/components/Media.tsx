import React from 'react'
import Clip from '../assets/video.mp4'
import Sound from '../assets/audio.mp3'

function Media() {

  return (
    <React.StrictMode>
      <div id="video">
        <video loop autoPlay muted>
          <source src={Clip} type="video/mp4" />
        </video>
        <audio loop autoPlay hidden>
          <source src={Sound} type="audio/mp3" />
        </audio>
      </div>
    </React.StrictMode>
  )
}

export default Media
