import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ExerciseCtxProvider } from './context/ExerciseCtx';
import { SessionCtxProvider } from './context/SessionCtx';
import {GroupCtxProvider} from './context/GroupCtx'

import { UaCtxProvider } from './context/UaCtx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* TODO: change providers dynamically? */}
    <UaCtxProvider>
    <GroupCtxProvider>
    <ExerciseCtxProvider>
    <SessionCtxProvider>
      <App />
    </SessionCtxProvider>
    </ExerciseCtxProvider>
    </GroupCtxProvider>
    </UaCtxProvider>
  </React.StrictMode>
);


