import React, { useEffect, useState, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  // substituição de uma função convencional por uma useCallback
  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

  // Substituição do componentDidMount
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  // Substituição do componentDidUpdate
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  // useMemo substitui a forma de chamar a função lenght, dessa chama apenas quando a variável sofre alteração
  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map((techs) => (
          <li key={techs}>{techs}</li>
        ))}
      </ul>
      <strong>{techSize} adicionadas</strong>
      <br />
      <input value={newTech} onChange={(e) => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Add Tech
      </button>
    </>
  );
}

export default App;
