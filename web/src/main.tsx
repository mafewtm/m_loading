import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, MantineProvider } from '@mantine/core';
import App from './App';
import './index.scss';
import "@mantine/core/styles.css";

export const theme = createTheme({
  fontFamilyMonospace: 'Roboto',
});

const root = document.getElementById('root');
ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);

