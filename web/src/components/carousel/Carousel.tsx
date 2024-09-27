import { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay';

export default function Media() {
  const autoplay = useRef(Autoplay({
    delay: 5000,
    stopOnInteraction: false
  }));

  const images = [
    'https://raw.githubusercontent.com/mafewtm/m_loading/main/web/src/assets/images/1.png',
    'https://raw.githubusercontent.com/mafewtm/m_loading/main/web/src/assets/images/2.png',
    'https://raw.githubusercontent.com/mafewtm/m_loading/main/web/src/assets/images/3.png',
    'https://raw.githubusercontent.com/mafewtm/m_loading/main/web/src/assets/images/4.png',
  ];

  const slides = images.map((url, index) => (
    <CarouselItem key={index}>
      <img src={url} />
    </CarouselItem>
  ));

  return (
    <div className='flex opacity-60'>
      <Carousel
        className='flex-1'
        plugins = {[autoplay.current]}
      >
        <CarouselContent>
          {slides}
        </CarouselContent>
      </Carousel>
    </div>
  );
}