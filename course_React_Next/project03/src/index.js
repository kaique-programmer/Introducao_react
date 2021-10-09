import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CounterContextProvider from './contexts/CounterContext';

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
