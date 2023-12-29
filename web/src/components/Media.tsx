import React , { useState }from 'react'
import { ActionIcon } from '@mantine/core';
import Clip from '../assets/video.mp4'
import Sound from '../assets/audio.mp3'
import { IconVolume, IconVolumeOff } from '@tabler/icons-react';

function Media() {
  const [muted, setMuted] = useState(false);

  const toggleMute = () => {
    const audio = document.getElementById('audioElement') as HTMLMediaElement | null;
    if (audio) {
      audio.muted = !audio.muted;
      setMuted(!muted);
    }
  };
  return (
    <React.StrictMode>
      <div id="video">
        <video loop autoPlay muted>
          <source src={Clip} type="video/mp4" />
        </video>
        <audio id="audioElement" loop autoPlay hidden>
          <source src={Sound} type="audio/mp3" />
        </audio>
      </div>
      <ActionIcon classNames={{root: 'mute'}} variant="default" color="rgba(43, 43, 43, 0.08)" size="lg" aria-label="Mute" onClick={toggleMute}>
        {muted ? <IconVolumeOff style={{ width: '70%', height: '70%' }} /> : <IconVolume style={{ width: '70%', height: '70%' }} />}
      </ActionIcon>
    </React.StrictMode>
  );
}

export default Media
