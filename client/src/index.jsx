import React from 'react';
import './index.scss';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import { HashRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

import { createTheme, ThemeProvider } from '@mui/material/styles';
const { palette } = createTheme();
const { augmentColor } = palette;

const theme = createTheme({
   palette: {
      type: 'light',
      primary: {
         main: '#364f6b',
      },
      secondary: {
         main: '#3fc1c9',
      },
      divider: '#909096',
      info: {
         main: '#fc5185',
      },
   },
   typography: {
      h6: {
         fontSize: '0.8rem',
      },
      caption: {
         fontSize: '0.7rem',
      },
   },
});

//use hashrouter instead of browser router to not interfere with server
root.render(
   <ThemeProvider theme={theme}>
      <HashRouter>
         <App />
      </HashRouter>
   </ThemeProvider>
);
