/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import {
  forwardRef, useImperativeHandle, useLayoutEffect, useRef, useState,
} from 'react';

const Home = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4, 5]);

  const divRef = useRef();

  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now < now + 3000);
    divRef.current.divRef.scrollTop = divRef.current.divRef.scrollHeight;
  });

  function handleClick() {
    setCounted((c) => [...c, +c.slice(-1) + 1]);
    divRef.current.handleClick();
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        Count
        {' '}
        {counted.slice(-1)}
      </button>
      <DisplayCounted counted={counted} ref={divRef} />
    </>
  );
};

export const DisplayCounted = forwardRef(({ counted }, ref) => {
  const [rand, setRand] = useState('0.24');
  const divRef = useRef();

  function handleClick() {
    setRand(Math.random().toFixed(2));
  }

  useImperativeHandle(ref, () => ({
    handleClick,
    divRef: divRef.current,
  }));

  return (
    <div ref={divRef} style={{ height: '100px', width: '100px', overflowY: 'scroll' }}>
      {counted.map((c) => (
        <p onClick={handleClick} key={`c-${c}`}>
          {c}
          {' '}
          +++
          {rand}
        </p>
      ))}
    </div>
  );
});

export default Home;
