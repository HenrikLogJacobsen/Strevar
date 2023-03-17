import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ExerciseCtxProvider } from './context/ExerciseCtx';
import { SessionCtxProvider } from './context/SessionCtx';
import { UserCtxProvider } from './context/UserCtx';



import { UaCtxProvider } from './context/UaCtx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* TODO: change providers dynamically? */}
    <UaCtxProvider>
    <ExerciseCtxProvider>
    <SessionCtxProvider>
    <UserCtxProvider>
        <App />
    </UserCtxProvider>
    </SessionCtxProvider>
    </ExerciseCtxProvider>
    </UaCtxProvider>
  </React.StrictMode>
);


