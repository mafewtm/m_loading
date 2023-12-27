import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, MantineProvider } from '@mantine/core';
import App from './App';
import './index.scss';

const theme = createTheme({
  /** Put your mantine theme override here */
});

const root = document.getElementById('root');
ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);

