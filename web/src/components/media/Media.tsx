import { useEffect, useState }from 'react'
import { Button } from '@/components/ui/button'

import Sound from '../../assets/audio.mp3'
import { Icon } from '@iconify/react';

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
    <div>
      <div>
        <audio id='audioElement' loop autoPlay hidden>
          <source src={Sound} type='audio/mp3' />
        </audio>
      </div>

      <Button variant='ghost' className='absolute bottom-12 right-12 hover:bg-zinc-300/20 z-10' size='icon'onClick={toggleMute}>
        <Icon icon={muted ? 'hugeicons:volume-off' : 'hugeicons:volume-high'} className = 'h-6 w-6 text-zinc-300' />
      </Button>
    </div>
  );
}