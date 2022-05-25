import React from 'react';
import './index.scss';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import { HashRouter, Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

//use hashrouter instead of browser router to not interfere with server
root.render(
   <HashRouter>
      <Routes>
         <Route path='/:id' element={<App />} />
      </Routes>
   </HashRouter>
);
