import { useLayoutEffect, useRef, useState } from 'react';

const Home = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4, 5]);

  const divRef = useRef();

  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now < now + 3000) { divRef.current.scrollTop = divRef.current.scrollHeight; }
  });

  function handleClick() {
    setCounted((c) => [...c, +c.slice(-1) + 1]);
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        Count
        {' '}
        {counted.slice(-1)}
      </button>
      <div ref={divRef} style={{ height: '100px', width: '100px', overflowY: 'scroll' }}>
        {counted.map((c) => <p key={`c-${c}`}>{c}</p>)}
      </div>
    </>
  );
};

export default Home;
