import React , { useEffect, useState }from 'react'
import { ActionIcon, Box } from '@mantine/core';
import Sound from '../../assets/audio.mp3'
import { IconVolume, IconVolumeOff } from '@tabler/icons-react';
import classes from './media.module.css';

function Media() {
  const [muted, setMuted] = useState(false);

  const toggleMute = () => {
    const audio = document.getElementById('audioElement') as HTMLAudioElement | null;
  
    if (audio) {
      audio.muted = !audio.muted;
      setMuted(audio.muted); // assuming setMuted is a function that takes a boolean as an argument
 
      // Save the mute state to localStorage
      localStorage.setItem('isMuted', JSON.stringify(audio.muted));
    }
  
    useEffect(() => {
      const audio = document.getElementById('audioElement') as HTMLAudioElement | null;
   
      if (audio) {
        // Get the mute state from localStorage
        const isMuted = localStorage.getItem('isMuted');
   
        if (isMuted !== null) {
          audio.muted = JSON.parse(isMuted);
          setMuted(audio.muted); // assuming setMuted is a function that takes a boolean as an argument
        }
      }
    }, []);
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

export default Media
