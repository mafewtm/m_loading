import { useState } from 'react';
import Media from './components/media/Media';
import Carousel from './components/carousel/Carousel';
import { Progress } from '@/components/ui/progress';

export default function App() {
  const [progress, setProgress] = useState(30);
  const handlers = {
    loadProgress(data: { loadFraction: number }) {
      data.loadFraction === 1 ? setProgress(100) : setProgress(data.loadFraction * 100);
    }
  };

  window.addEventListener('message', function(event) {
    handlers[event.data.eventName as keyof typeof handlers]?.(event.data);
  });

  return (
    <div className='flex h-full w-full items-center justify-center bg-neutral-800'>
      <div className='absolute z-10'>
        <h1 className='text-9.5xl text-text1 font-bold leading-5 tracking-tight uppercase text-center drop-shadow-lg'>Server Name</h1>
      </div>

      <Media />
      <Carousel />

      <Progress className='h-1 absolute z-10 top-0 bg-transparent drop-shadow-blue' value={progress} />
    </div>
  );
}