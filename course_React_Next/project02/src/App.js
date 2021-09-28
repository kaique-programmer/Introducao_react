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
import Div from './components/Div';

const globalState = {
  title: 'the title context',
  body: 'the body context',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'change': {
      console.log('call change', action.payload);
      return { ...state, title: action.payload };
    }
    case 'reverse': {
      console.log('call reverse');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
    default: break;
  }

  console.log('nothing action finded');
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;

  return (
    <div>
      <h1>
        {title}
        {' '}
        {counter}
      </h1>
      <button onClick={() => dispatch({ type: 'change', payload: new Date().toLocaleDateString('pt-BR') })}>Click</button>
      <button onClick={() => dispatch({ type: 'reverse' })}>reverse</button>
    </div>
  );
}

export default App;
