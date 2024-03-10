import React from 'react'
import Media from './components/Media'
import { Box, Title, Text } from "@mantine/core";
import classes from './index.module.css';

function App() {
  return (
    <React.StrictMode>
      <Box className={classes.container}>
        <Title className={classes.title}>Server Name</Title>
        <Text className={classes.description}>Server Description</Text>
      </Box>
      <Media />
    </React.StrictMode>
  );
}

export default App
