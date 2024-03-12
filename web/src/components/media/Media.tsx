import React , { useEffect, useState }from 'react'
import { ActionIcon, Box } from '@mantine/core';
import Sound from '../../assets/audio.mp3'
import { IconVolume, IconVolumeOff } from '@tabler/icons-react';
import classes from './media.module.css';

export default function Media() {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const isMuted = localStorage.getItem('isMuted');

    if (isMuted !== null) {
      const mutedValue = JSON.parse(isMuted);
      setMuted(mutedValue);

      const audio = document.getElementById('audioElement') as HTMLAudioElement | null;
      if (audio) {
        audio.muted = mutedValue;
      }
    }
  }, []);

  const toggleMute = () => {
    const audio = document.getElementById('audioElement') as HTMLAudioElement | null;

    if (audio) {
      audio.muted = !audio.muted;
      setMuted(audio.muted);

      localStorage.setItem('isMuted', JSON.stringify(audio.muted));
    }
  };

  return (
    <React.StrictMode>
      <Box className={classes.container}>
        <audio id="audioElement" loop autoPlay hidden>
          <source src={Sound} type="audio/mp3" />
        </audio>
      </Box>
      
      <ActionIcon className={classes.mute} variant="subtle" size="lg" color = "gray" aria-label="Mute" onClick={toggleMute}>
        {muted ? <IconVolumeOff className={classes.muteIcon} /> : <IconVolume className={classes.muteIcon} />}
      </ActionIcon>
    </React.StrictMode>
  );
}
