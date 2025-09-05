import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

import "@fontsource/roboto-mono/400.css";

import "@fontsource/montserrat/700.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
