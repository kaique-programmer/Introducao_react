import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState(['Node', 'Php']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
  }

  return (
    <>
      <ul>
        {tech.map((techs) => (
          <li key={techs}>{techs}</li>
        ))}
      </ul>
      <input value={newTech} onChange={(e) => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Add Tech
      </button>
    </>
  );
}

export default App;
