import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ExerciseCtxProvider } from './context/ExerciseCtx';
import { UaCtxProvider } from './context/UaCtx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UaCtxProvider>
      <ExerciseCtxProvider>  
        <App />
      </ExerciseCtxProvider>
    </UaCtxProvider>
  </React.StrictMode>
);


