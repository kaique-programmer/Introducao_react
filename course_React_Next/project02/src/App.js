/* eslint-disable default-case */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-use-before-define */
/* eslint-disable react/require-default-props */
/* eslint-disable no-undef */

import { useEffect, useRef, useState } from 'react';

const useMyHook = (callback, delay) => {
  const saveCallback = useRef();

  useEffect(() => {
    saveCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const interval = setInterval(() => {
      saveCallback.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};

// App.jsx
function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [increment, setIncrement] = useState(100);

  useMyHook(() => setCounter((c) => c + 1), delay);

  return (
    <div>
      <h1>
        Contador
        {counter}
      </h1>
      <h1>
        Delay
        {delay}
      </h1>
      <button type="button" onClick={() => setDelay((d) => d + increment)}>
        +
        {increment}
      </button>
      <button type="button" onClick={() => setDelay((d) => d - increment)}>
        -
        {increment}
      </button>
      <input type="number" value={increment} onChange={(e) => { setIncrement(Number(e.target.value)); }} />
    </div>
  );
}

export default App;
