import React from 'react';
import ReactDOM from 'react-dom/client';

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import App from './App';

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '70px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
  containerStyle: {
    zIndex: 1000
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
);

