import React, { useEffect, useState } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
  }

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
