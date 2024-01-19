import React , { useState }from 'react'
import { ActionIcon } from '@mantine/core';
import Clip from '../assets/video.mp4'
import Sound from '../assets/audio.mp3'
import { IconVolume, IconVolumeOff } from '@tabler/icons-react';

function Media() {
  const [muted, setMuted] = useState(false);

  const toggleMute = () => {
    const audio = document.getElementById('audioElement') as HTMLAudioElement | null;
  
    if (audio) {
      audio.muted = !audio.muted;
      setMuted(audio.muted); // assuming setMuted is a function that takes a boolean as an argument
    }
  };
  return (
    <React.StrictMode>
      <div id="video">
        <video loop autoPlay muted preload="auto">
          <source src={Clip} type="video/mp4" />
        </video>
        <audio id="audioElement" loop autoPlay hidden>
          <source src={Sound} type="audio/mp3" />
        </audio>
      </div>
      <ActionIcon classNames={{root: 'mute'}} variant="subtle" size="lg" color = "cyan" aria-label="Mute" onClick={toggleMute}>
        {muted ? <IconVolumeOff style={{ width: '70%', height: '70%' }} /> : <IconVolume style={{ width: '70%', height: '70%' }} />}
      </ActionIcon>
    </React.StrictMode>
  );
}

export default Media
