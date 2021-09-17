/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import Props from 'prop-types';

import React, { useCallback, useState } from 'react';

const Button = React.memo(({ incrementButton }) => {
  console.log('filho, renderizou');
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: Props.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((number) => {
    setCounter((c) => c + number);
  }, []);

  console.log('pai, renderizou');

  return (
    <div className="App">
      <p>Teste</p>
      <h1>
        c1:
        {counter}
      </h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
