import { useState, useEffect } from 'react';

const addFunction = () => {
  console.log('h1 clicked');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // componentDidUpdate - executa toda vez que o componente atualiza
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  // componentDidMount - executa 1x
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', addFunction);

    // componentWillUnmount - limpeza
    return () => {
      document.querySelector('h1').removeEventListener('click', addFunction);
    };
  }, []);

  // com dependência - executa toda vez que a dependência mudar
  useEffect(() => {
    console.log('C1', counter, 'C2', counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <p>Test 1</p>
      <h1>
        c1:
        {counter}
        {''}
        c2:
        {counter2}
        {''}
      </h1>
      <button type="button" onClick={() => setCounter(counter + 1)}>+</button>
      <button type="button" onClick={() => setCounter2(counter2 + 1)}>+ (2)</button>
    </div>
  );
}

export default App;
