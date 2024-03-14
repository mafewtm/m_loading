import { Box, Stack, Title } from "@mantine/core";
import classes from './index.module.css';
import Media from './components/media/Media';
import Carousel from './components/carousel/Carousel';

export default function App() {
  return (
    <Box className={classes.container}>
      <Stack className={classes.main}>
        <Title order={1} className={classes.title}>Server Name</Title>
      </Stack>
      <Carousel />
      <Media />
    </Box>
  );
}
