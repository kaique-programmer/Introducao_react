/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */

import React, { useState, Suspense } from 'react';
// import LazyComponent from './lazy-component';

const loadComponent = () => {
  console.log('loading component');
  return import('./lazy-component');
};

const LazyComponent = React.lazy(loadComponent);

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <p>
          <button
            type="button"
            onMouseOver={loadComponent}
            onFocus={loadComponent}
            onClick={() => setShow((s) => !s)}
          >
            show
            {' '}
            {show ? 'LC on screen' : 'LC is off screen'}
          </button>
        </p>
        <Suspense fallback={<p>Loading...</p>}>
          {show && <LazyComponent />}
        </Suspense>
      </div>
    </>
  );
};

export default Home;
