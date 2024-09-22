import { Box, Stack, Title } from '@mantine/core';
import classes from './index.module.css';
import Media from './components/media/Media';
import Carousel from './components/carousel/Carousel';
import { nprogress, NavigationProgress } from '@mantine/nprogress';

const handlers = {
  loadProgress(data: { loadFraction: number }) {
    data.loadFraction === 1 ? nprogress.complete() : nprogress.set(data.loadFraction * 100);
  }
};

window.addEventListener('message', function(event) {
  handlers[event.data.eventName as keyof typeof handlers]?.(event.data);
});

export default function App() {
  return (
    <Box className={classes.container}>
      <Stack className={classes.main}>
        <Title order={1} className={classes.title}>Server Name</Title>
      </Stack>
      <Carousel />
      <Media />
      <NavigationProgress />
    </Box>
  );
}