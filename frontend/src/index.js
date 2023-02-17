import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ExerciseCtxProvider } from './context/ExerciseCtx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ExerciseCtxProvider>  
      <App />
    </ExerciseCtxProvider>
  </React.StrictMode>
);


