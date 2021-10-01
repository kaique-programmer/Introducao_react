/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import { useReducer } from 'react';
import AppContext from './contexts/AppContext';

const globalState = {
  title: 'the title context',
  body: 'the body context',
  counter: 0,
};

function App() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
