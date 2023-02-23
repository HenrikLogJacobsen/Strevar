import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ExerciseCtxProvider } from './context/ExerciseCtx';
import { SessionCtxProvider } from './context/SessionCtx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* TODO: change providers dynamically? */}
    <ExerciseCtxProvider>
      <SessionCtxProvider>
        <App />
      </SessionCtxProvider>
    </ExerciseCtxProvider>
  </React.StrictMode>
);


