import { useState } from 'react';
import './App.css';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
    setCounter(counter + 1);
  };

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  const handleDecrease = () => {
    setCounter((counter) => counter - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="logo" className={`App-logo ${reverseClass}`} alt="logo" />

        <button type="button" onClick={handleClick}>{reverseClass}</button>
        <h1>Counter:{counter}</h1>
        <button type="button" onClick={handleIncrement}>Decrease: {counter}</button>
        <button type="button" onClick={handleDecrease}>Increment: {counter}</button>
      </header>
    </div>
  );
}

export default App;
