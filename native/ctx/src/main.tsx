import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { Global } from './config/theme.ts';

import './index.css';
import 'virtual:svg-icons-register';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Global />
  </React.StrictMode>,
);
