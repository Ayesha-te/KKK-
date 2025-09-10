import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Avoid JSX in this file to bypass any JSX runtime mismatch
createRoot(document.getElementById('root')!).render(React.createElement(App));
